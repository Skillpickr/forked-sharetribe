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
    currentUser
  } = props

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle })
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' })
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`
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
            <section className={css.sectionContentFirstChild}>
              <SectionCategories user={currentUser} />
              <div className={css.heroContainer}>
                <SectionHero className={css.hero} history={history} location={location} />
              </div>
              {/* <SectionLocations /> */}
            </section>
            <section className={css.section}>
              <div className={css.sectionContent}>
                {listings != null && <SectionTopArtists listings={listings} intl={intl} />}
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
                <SectionBecome />
              </div>
            </section>
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
  currentUserListing: null,
  currentUserListingFetched: false,
  currentUser: null
}

LandingPageComponent.propTypes = {
  listings: array,
  scrollingDisabled: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
  currentUser: propTypes.currentUser,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  const { currentUserListing, currentUserListingFetched, currentUser } = state.user
  const { currentPageResultIds } = state.SearchPage
  const pageListings = getListingsById(state, currentPageResultIds)

  return {
    scrollingDisabled: isScrollingDisabled(state),
    currentUserListing,
    currentUserListingFetched,
    listings: pageListings,
    currentUser
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
