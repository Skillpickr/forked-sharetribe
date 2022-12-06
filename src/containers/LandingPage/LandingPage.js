import React, { useEffect, useState } from 'react'
import { bool, object, array, func } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { injectIntl, intlShape } from '../../util/reactIntl'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import { propTypes } from '../../util/types'
import config from '../../config'
import unionWith from 'lodash/unionWith'
import { searchMapListings, setActiveListing } from '../SearchPage/SearchPage.duck'
import { parse, stringify } from '../../util/urlHelpers'
import {
  pickSearchParamsOnly,
  validURLParamsForExtendedData,
  validFilterParams,
  createSearchResultSchema
} from '../SearchPage/SearchPage.helpers'
import * as custom from '../../marketplace-custom-config.js'
import { userLocation } from '../../util/maps'
import { locationBounds } from '../../components/LocationAutocompleteInput/GeocoderMapbox'

import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionLocations,
  SectionBecome,
  SectionTopArtists,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  QuoteTheDay,
  SearchResultsPanel
} from '../../components'
import { TopbarContainer } from '../../containers'
import { getListingsById } from '../../ducks/marketplaceData.duck'

import facebookImage from '../../assets/skillpickr-facebook1640x924.png'
import twitterImage from '../../assets/skillpickr-facebook1640x924.png'
import css from './LandingPage.module.css'
import SectionCategories from '../../components/SectionCategories/SectionCategories'

export const LandingPageComponent = (props) => {
  const {
    history,
    listings,
    intl,
    location,
    scrollingDisabled,
    currentUserListing,
    currentUserListingFetched,
    mapListings,
    filterConfig,
    sortConfig,
    searchInProgress,
    searchParams,
    pagination,
    onActivateListing
  } = props

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle })
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' })
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`
  const [mounted, setMounted] = useState(false)
  const [ipLocation, setIpLocation] = useState('')

  const userIpLocation = () => {
    return userLocation()
      .then((latlng) => {
        if (latlng) {
          setIpLocation({
            address: '',
            origin: latlng,
            bounds: locationBounds(latlng, config.maps.search.currentLocationBoundsDistance)
          }),
            setMounted(true)
        }
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    userIpLocation()
    return () => {
      setIpLocation({})
    }
  }, [])

  const { mapSearch, page, ...searchInURL } = parse(location.search, {
    latlng: ['origin'],
    latlngBounds: ['bounds']
  })
  const urlQueryParams = pickSearchParamsOnly(searchInURL, filterConfig, sortConfig)

  console.log(urlQueryParams)
  const urlQueryString = stringify(urlQueryParams)
  const paramsQueryString = stringify(pickSearchParamsOnly(searchParams, filterConfig, sortConfig))
  const searchParamsAreInSync = urlQueryString === paramsQueryString

  const listingsAreLoaded = !searchInProgress && searchParamsAreInSync

  console.log('listings', listings)
  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[{ url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 }]}
      schema={{
        '@context': 'http://schema.org',
        '@type': ['WebPage', 'SoftwareApplication'],
        description: schemaDescription,
        name: schemaTitle,
        applicationCategory: 'BusinessApplication',
        image: [schemaImage],
        offers: {
          '@type': 'Offer',
          price: '0'
        }
      }}>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          {/* <QuoteTheDay /> */}
          <div className={css.sections}>
            <section className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <SectionCategories />
                {/* <SectionLocations /> */}
              </div>
            </section>
            <section className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks
                  currentUserListing={currentUserListing}
                  currentUserListingFetched={currentUserListingFetched}
                />
              </div>
            </section>
            <section className={css.section}>
              <div className={css.sectionContent}>
                <SectionTopArtists listings={listings} intl={intl} />
              </div>
            </section>
            <section className={css.section}>
              <div className={css.sectionContent}>
                <SectionBecome />
              </div>
            </section>
          </div>

          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  )
}

LandingPageComponent.defaultProps = {
  listings: [],
  mapListings: [],
  currentUserListing: null,
  currentUserListingFetched: false,
  searchParams: {},
  filterConfig: custom.filters,
  sortConfig: custom.sortConfig,
  pagination: null,
  activeListingId: null
}

LandingPageComponent.propTypes = {
  listings: array,
  mapListings: array,
  scrollingDisabled: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
  onSearchMapListings: func.isRequired,
  searchParams: object,
  filterConfig: propTypes.filterConfig,
  sortConfig: propTypes.sortConfig,
  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  const { currentUserListing, currentUserListingFetched } = state.user
  const {
    currentPageResultIds,
    pagination,
    searchInProgress,
    searchListingsError,
    searchParams,
    searchMapListingIds,
    activeListingId
  } = state.SearchPage
  const pageListings = getListingsById(state, currentPageResultIds)

  const mapListings = getListingsById(
    state,
    unionWith(currentPageResultIds, searchMapListingIds, (id1, id2) => id1.uuid === id2.uuid)
  )
  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUserListing,
    currentUserListingFetched,
    listings: pageListings,
    mapListings,
    pagination,
    searchInProgress,
    searchListingsError,
    searchParams,
    activeListingId
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSearchMapListings: (searchParams) => dispatch(searchMapListings(searchParams))
})

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), injectIntl)(LandingPageComponent)

export default LandingPage
