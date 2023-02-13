import React, { Component } from 'react'
import { array, bool, func, number, object, shape, string } from 'prop-types'
import classNames from 'classnames'
import omit from 'lodash/omit'
import config from '../../config'
import * as custom from '../../marketplace-custom-config.js'
import routeConfiguration from '../../routeConfiguration'
import { FormattedMessage } from '../../util/reactIntl'
import { createResourceLocatorString } from '../../util/routes'
import { isAnyFilterActive } from '../../util/search'
import { propTypes } from '../../util/types'
import {
  SearchResultsPanel,
  SearchFiltersMobile,
  SearchFiltersPrimary,
  SearchFiltersSecondary,
  SortBy
} from '../../components'

import FilterComponent from './FilterComponent'
import { validFilterParams } from './SearchPage.helpers'
import { Skills, Categories } from '../../util/category'
import { CheckboxFieldsType, DropdownFieldsType } from '../../util/featuresFields'

import css from './SearchPage.module.css'

// Primary filters have their content in dropdown-popup.
// With this offset we move the dropdown to the left a few pixels on desktop layout.
const FILTER_DROPDOWN_OFFSET = -14

const cleanSearchFromConflictingParams = (searchParams, sortConfig, filterConfig) => {
  // Single out filters that should disable SortBy when an active
  // keyword search sorts the listings according to relevance.
  // In those cases, sort parameter should be removed.
  const sortingFiltersActive = isAnyFilterActive(sortConfig.conflictingFilters, searchParams, filterConfig)
  return sortingFiltersActive ? { ...searchParams, [sortConfig.queryParamName]: null } : searchParams
}

/**
 * MainPanel contains search results and filters.
 * There are 3 presentational container-components that show filters:
 * SearchfiltersMobile, SearchFiltersPrimary, and SearchFiltersSecondary.
 * The last 2 are for desktop layout.
 */
class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { isSecondaryFiltersOpen: false, currentQueryParams: props.urlQueryParams }

    this.applyFilters = this.applyFilters.bind(this)
    this.cancelFilters = this.cancelFilters.bind(this)
    this.resetAll = this.resetAll.bind(this)

    this.initialValues = this.initialValues.bind(this)
    this.getHandleChangedValueFn = this.getHandleChangedValueFn.bind(this)

    // SortBy
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  // Apply the filters by redirecting to SearchPage with new filters.
  applyFilters() {
    const { history, urlQueryParams, sortConfig, filterConfig } = this.props
    const searchParams = { ...urlQueryParams, ...this.state.currentQueryParams }
    const search = cleanSearchFromConflictingParams(searchParams, sortConfig, filterConfig)

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, search))
  }

  // Close the filters by clicking cancel, revert to the initial params
  cancelFilters() {
    this.setState({ currentQueryParams: {} })
  }

  // Reset all filter query parameters
  resetAll(e) {
    const { urlQueryParams, history, filterConfig } = this.props
    const filterQueryParamNames = filterConfig.map((f) => f.queryParamNames)

    // Reset state
    this.setState({ currentQueryParams: {} })

    // Reset routing params
    const queryParams = omit(urlQueryParams, filterQueryParamNames)
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams))
  }

  initialValues(queryParamNames) {
    // Query parameters that are visible in the URL
    const urlQueryParams = this.props.urlQueryParams
    // Query parameters that are in state (user might have not yet clicked "Apply")
    const currentQueryParams = this.state.currentQueryParams

    // Get initial value for a given parameter from state if its there.
    const getInitialValue = (paramName) => {
      const currentQueryParam = currentQueryParams[paramName]
      const hasQueryParamInState = typeof currentQueryParam !== 'undefined'
      return hasQueryParamInState ? currentQueryParam : urlQueryParams[paramName]
    }

    // Return all the initial values related to given queryParamNames
    // InitialValues for "amenities" filter could be
    // { amenities: "has_any:towel,jacuzzi" }
    const isArray = Array.isArray(queryParamNames)
    return isArray
      ? queryParamNames.reduce((acc, paramName) => {
          return { ...acc, [paramName]: getInitialValue(paramName) }
        }, {})
      : {}
  }

  getHandleChangedValueFn(useHistoryPush) {
    const { urlQueryParams, history, sortConfig, filterConfig } = this.props

    return (updatedURLParams) => {
      const updater = (prevState) => {
        const { address, bounds } = urlQueryParams
        const mergedQueryParams = { ...urlQueryParams, ...prevState.currentQueryParams }

        // Address and bounds are handled outside of MainPanel.
        // I.e. TopbarSearchForm && search by moving the map.
        // We should always trust urlQueryParams with those.
        return {
          currentQueryParams: { ...mergedQueryParams, ...updatedURLParams, address, bounds }
        }
      }

      const callback = () => {
        if (useHistoryPush) {
          const searchParams = this.state.currentQueryParams
          const search = cleanSearchFromConflictingParams(searchParams, sortConfig, filterConfig)
          history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, search))
        }
      }

      this.setState(updater, callback)
    }
  }

  handleSortBy(urlParam, values) {
    const { history, urlQueryParams } = this.props
    const queryParams = values ? { ...urlQueryParams, [urlParam]: values } : omit(urlQueryParams, urlParam)

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams))
  }

  render() {
    const {
      className,
      rootClassName,
      urlQueryParams,
      listings,
      searchInProgress,
      searchListingsError,
      searchParamsAreInSync,
      onActivateListing,
      onManageDisableScrolling,
      onOpenModal,
      onCloseModal,
      onMapIconClick,
      pagination,
      searchParamsForPagination,
      showAsModalMaxWidth,
      filterConfig,
      sortConfig
    } = this.props

    const primaryFilters = filterConfig.filter((f) => f.group === 'primary')

    const secondaryFilters = filterConfig.filter((f) => f.group !== 'primary')

    const hasSecondaryFilters = !!(secondaryFilters && secondaryFilters.length > 0)

    // Selected aka active filters
    const selectedFilters = validFilterParams(urlQueryParams, filterConfig)

    const selectedFiltersCount = Object.keys(selectedFilters).length

    // Selected aka active secondary filters
    const selectedSecondaryFilters = hasSecondaryFilters ? validFilterParams(urlQueryParams, secondaryFilters) : {}
    const selectedSecondaryFiltersCount = Object.keys(selectedSecondaryFilters).length

    const isSecondaryFiltersOpen = !!hasSecondaryFilters && this.state.isSecondaryFiltersOpen
    const propsForSecondaryFiltersToggle = hasSecondaryFilters
      ? {
          isSecondaryFiltersOpen: this.state.isSecondaryFiltersOpen,
          toggleSecondaryFiltersOpen: (isOpen) => {
            this.setState({ isSecondaryFiltersOpen: isOpen })
          },
          selectedSecondaryFiltersCount
        }
      : {}

    // With time-based availability filtering, pagination is NOT
    // supported. In these cases we get the pagination support info in
    // the response meta object, and we can use the count of listings
    // as the result count.
    //
    // See: https://www.sharetribe.com/api-reference/marketplace.html#availability-filtering
    const hasPaginationInfo = !!pagination && !pagination.paginationUnsupported
    const listingsLength = listings ? listings.length : 0
    const totalItems = searchParamsAreInSync && hasPaginationInfo ? pagination.totalItems : listingsLength

    const listingsAreLoaded = !searchInProgress && searchParamsAreInSync

    const sortBy = (mode) => {
      const conflictingFilterActive = isAnyFilterActive(sortConfig.conflictingFilters, urlQueryParams, filterConfig)

      const mobileClassesMaybe =
        mode === 'mobile'
          ? {
              rootClassName: css.sortBy,
              menuLabelRootClassName: css.sortByMenuLabel
            }
          : {}
      return sortConfig.active ? (
        <SortBy
          {...mobileClassesMaybe}
          sort={urlQueryParams[sortConfig.queryParamName]}
          isConflictingFilterActive={!!conflictingFilterActive}
          onSelect={this.handleSortBy}
          showAsPopup
          contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
        />
      ) : null
    }

    const classes = classNames(rootClassName || css.searchResultContainer, className)

    const handlePrimaryFilters = (param) => {
      if (param === Skills.musician) {
        return primaryFilters
      } else {
        return primaryFilters.filter((f) => f.id !== DropdownFieldsType.musicianSoloKey)
      }
    }

    let photoFilterIds = [CheckboxFieldsType.photographerTypeKey]
    let videoFilterIds = [CheckboxFieldsType.videographerTypeKey]
    let djFilterIds = [CheckboxFieldsType.djTypeKey]
    let musicianFilterIds = [CheckboxFieldsType.musicianGenreKey, CheckboxFieldsType.musicianTypeKey]
    let bandFilterIds = [CheckboxFieldsType.bandGenreKey, CheckboxFieldsType.bandTypeKey]
    let makeupFilterIds = [CheckboxFieldsType.makeupArtistTypeKey]
    let dancerFilterIds = [CheckboxFieldsType.dancerTypeKey]

    const handleSecondaryFilters = (param) => {
      switch (param) {
        case Skills.photographer:
          return secondaryFilters.filter((f) => photoFilterIds.includes(f.id))
        case Skills.videographer:
          return secondaryFilters.filter((f) => videoFilterIds.includes(f.id))
        case Skills.dj:
          return secondaryFilters.filter((f) => djFilterIds.includes(f.id))
        case Skills.musician:
          return secondaryFilters.filter((f) => musicianFilterIds.includes(f.id))
        case Skills.band:
          return secondaryFilters.filter((f) => bandFilterIds.includes(f.id))
        case Skills.makeupArtist:
          return secondaryFilters.filter((f) => makeupFilterIds.includes(f.id))
        case Skills.dancer:
          return secondaryFilters.filter((f) => dancerFilterIds.includes(f.id))
        // case Skills.miscellaneous:
        //   return 'Miscellaneous'
        default:
          return secondaryFilters
      }
    }

    return (
      <div className={classes}>
        <SearchFiltersPrimary
          className={css.searchFiltersPrimary}
          sortByComponent={sortBy('desktop')}
          listingsAreLoaded={listingsAreLoaded}
          resultsCount={totalItems}
          searchInProgress={searchInProgress}
          searchListingsError={searchListingsError}
          {...propsForSecondaryFiltersToggle}>
          {handlePrimaryFilters(selectedFilters.pub_skill).map((config) => {
            return (
              <FilterComponent
                key={`SearchFiltersPrimary.${config.id}`}
                idPrefix="SearchFiltersPrimary"
                filterConfig={config}
                urlQueryParams={urlQueryParams}
                initialValues={this.initialValues}
                getHandleChangedValueFn={this.getHandleChangedValueFn}
                showAsPopup
                contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
              />
            )
          })}
        </SearchFiltersPrimary>
        <SearchFiltersMobile
          className={css.searchFiltersMobile}
          urlQueryParams={urlQueryParams}
          sortByComponent={sortBy('mobile')}
          listingsAreLoaded={listingsAreLoaded}
          resultsCount={totalItems}
          searchInProgress={searchInProgress}
          searchListingsError={searchListingsError}
          showAsModalMaxWidth={showAsModalMaxWidth}
          onMapIconClick={onMapIconClick}
          onManageDisableScrolling={onManageDisableScrolling}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
          resetAll={this.resetAll}
          selectedFiltersCount={selectedFiltersCount}>
          {filterConfig.map((config) => {
            return (
              <FilterComponent
                key={`SearchFiltersMobile.${config.id}`}
                idPrefix="SearchFiltersMobile"
                filterConfig={config}
                urlQueryParams={urlQueryParams}
                initialValues={this.initialValues}
                getHandleChangedValueFn={this.getHandleChangedValueFn}
                liveEdit
                showAsPopup={false}
              />
            )
          })}
        </SearchFiltersMobile>
        {isSecondaryFiltersOpen ? (
          <div className={classNames(css.searchFiltersPanel)}>
            <SearchFiltersSecondary
              urlQueryParams={urlQueryParams}
              listingsAreLoaded={listingsAreLoaded}
              applyFilters={this.applyFilters}
              cancelFilters={this.cancelFilters}
              resetAll={this.resetAll}
              onClosePanel={() => this.setState({ isSecondaryFiltersOpen: false })}>
              {handleSecondaryFilters(selectedFilters.pub_skill).map((config) => {
                return (
                  <FilterComponent
                    key={`SearchFiltersSecondary.${config.id}`}
                    idPrefix="SearchFiltersSecondary"
                    filterConfig={config}
                    urlQueryParams={urlQueryParams}
                    initialValues={this.initialValues}
                    getHandleChangedValueFn={this.getHandleChangedValueFn}
                    showAsPopup={false}
                  />
                )
              })}
            </SearchFiltersSecondary>
          </div>
        ) : (
          <div
            className={classNames(css.listings, {
              [css.newSearchInProgress]: !listingsAreLoaded
            })}>
            {searchListingsError ? (
              <h2 className={css.error}>
                <FormattedMessage id="SearchPage.searchError" />
              </h2>
            ) : null}
            <SearchResultsPanel
              className={css.searchListingsPanel}
              listings={listings}
              pagination={listingsAreLoaded ? pagination : null}
              search={searchParamsForPagination}
              setActiveListing={onActivateListing}
            />
          </div>
        )}
      </div>
    )
  }
}

MainPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listings: [],
  resultsCount: 0,
  pagination: null,
  searchParamsForPagination: {},
  filterConfig: custom.filters,
  sortConfig: custom.sortConfig
}

MainPanel.propTypes = {
  className: string,
  rootClassName: string,

  urlQueryParams: object.isRequired,
  listings: array,
  searchInProgress: bool.isRequired,
  searchListingsError: propTypes.error,
  searchParamsAreInSync: bool.isRequired,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  onOpenModal: func.isRequired,
  onCloseModal: func.isRequired,
  onMapIconClick: func.isRequired,
  pagination: propTypes.pagination,
  searchParamsForPagination: object,
  showAsModalMaxWidth: number.isRequired,
  filterConfig: propTypes.filterConfig,
  sortConfig: propTypes.sortConfig,

  history: shape({
    push: func.isRequired
  }).isRequired
}

export default MainPanel
