import React, { Component } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import config from '../../config'
import { FormattedMessage } from '../../util/reactIntl'
// import { lazyLoadWithDimensions } from '../../../util/contextHelpers'

import { ListingCard, NamedLink, ResponsiveImage } from '../../components'
import { lazyLoadWithDimensions } from '../../util/contextHelpers'
import { ensureListing } from '../../util/data'
import { createSlug } from '../../util/urlHelpers'
import css from './SectionTopArtists.module.css'
import { formatMoney } from '../../util/currency'
import SectionTopArtistsCard from './SectionTopArtistCard'

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 })
const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price)
    return { formattedPrice, priceTitle: formattedPrice }
  } else if (price) {
    return {
      formattedPrice: intl.formatMessage({ id: 'ListingCard.unsupportedPrice' }, { currency: price.currency }),
      priceTitle: intl.formatMessage({ id: 'ListingCard.unsupportedPriceTitle' }, { currency: price.currency })
    }
  }
  return {}
}
const SectionTopArtists = (props) => {
  const { rootClassName, className, listings, intl, setActiveListing } = props
  const classes = classNames(rootClassName || css.root, className)
  const randomSlide = (rand) => {
    return rand.sort(() => {
      return 0.5 - Math.random()
    })
  }
  // console.log(listings)
  // console.log('random', randomSlide(listings))

  return (
    <div className={classes}>
      <div className={css.sectionTitle}>
        <h2 className={css.title}>
          <FormattedMessage id="SectionTopArtists.heading" />
        </h2>
        <p className={css.textMuted}>
          <FormattedMessage id="SectionTopArtists.teaser" />
        </p>
      </div>
      <div className={css.slider}>
        <div className={css.slideTrack}>
          {listings?.map((listing, index) => {
            return (
              <SectionTopArtistsCard listing={listing} key={index} intl={intl} setActiveListing={setActiveListing} />
            )
          })}
        </div>
      </div>
      <div className={css.slider2}>
        <div className={css.slideTrack}>
          {listings?.map((listing, index) => {
            return (
              <SectionTopArtistsCard listing={listing} key={index} intl={intl} setActiveListing={setActiveListing} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

SectionTopArtists.defaultProps = { rootClassName: null, className: null }

SectionTopArtists.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionTopArtists
