import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { propTypes } from '../../util/types'
import { ListingCard, ListingListItem, PaginationLinks } from '../../components'
import css from './SearchResultsPanel.module.css'

const SearchResultsPanel = (props) => {
  const { className, rootClassName, listings, pagination, search, setActiveListing } = props
  const classes = classNames(rootClassName || css.root, className)

  const [view, setView] = useState('card')

  const handleViewChange = (newView) => {
    setView(newView)
  }

  const paginationLinks =
    pagination && pagination.totalPages > 1 ? (
      <PaginationLinks
        className={css.pagination}
        pageName="SearchPage"
        pageSearchParams={search}
        pagination={pagination}
      />
    ) : null

  // Panel width relative to the viewport
  const panelMediumWidth = 50
  const panelLargeWidth = 62.5
  const cardRenderSizes = [
    '(max-width: 767px) 100vw',
    `(max-width: 1023px) ${panelMediumWidth}vw`,
    `(max-width: 1920px) ${panelLargeWidth / 2}vw`,
    `${panelLargeWidth / 3}vw`
  ].join(', ')

  return (
    <div className={classes}>
      <div className={css.viewSwitcher}>
        <button
          className={classNames(css.gridButton, { [css.gridButtonActive]: view === 'card' })}
          onClick={() => handleViewChange('card')}>
          Card View
        </button>
        <button
          className={classNames(css.listButton, { [css.listButtonActive]: view === 'list' })}
          onClick={() => handleViewChange('list')}>
          List View
        </button>
      </div>
      {view === 'card' ? (
        <div className={css.listingCards}>
          {listings.map((l) => (
            <ListingCard className={css.listingCard} key={l.id.uuid} listing={l} setActiveListing={setActiveListing} />
          ))}
          {props.children}
        </div>
      ) : (
        <div className={css.listingList}>
          {listings.map((l) => (
            <ListingListItem
              className={css.listing}
              renderSizes={cardRenderSizes}
              key={l.id.uuid}
              listing={l}
              setActiveListing={setActiveListing}
            />
          ))}
        </div>
      )}
      {paginationLinks}
    </div>
  )
}

SearchResultsPanel.defaultProps = {
  children: null,
  className: null,
  listings: [],
  pagination: null,
  rootClassName: null,
  search: null
}

const { array, node, object, string } = PropTypes

SearchResultsPanel.propTypes = {
  children: node,
  className: string,
  listings: array,
  pagination: propTypes.pagination,
  rootClassName: string,
  search: object
}

export default SearchResultsPanel
