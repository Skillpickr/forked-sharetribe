import React, { Component } from 'react'
import { array, string, func } from 'prop-types'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'
import classNames from 'classnames'
import { lazyLoadWithDimensions } from '../../util/contextHelpers'
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types'
import { formatMoney } from '../../util/currency'
import { ensureListing } from '../../util/data'
import { richText } from '../../util/richText'
import { findOptionsForSelectFilter } from '../../util/search'
import { createSlug } from '../../util/urlHelpers'
import config from '../../config'
import * as custom from '../../marketplace-custom-config.js'
import { NamedLink, ResponsiveImage } from '../../components'

import css from './ListingListItem.module.css'
import { Skills } from '../../util/category'
import { DropdownFieldsType } from '../../util/featuresFields'

const MIN_LENGTH_FOR_LONG_WORDS = 10

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

const getItemFromList = (skillOptions, key) => {
  return skillOptions.find((c) => c.key === key)
}

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 })

export const ListingListItemComponent = (props) => {
  const { className, rootClassName, intl, listing, renderSizes, filtersConfig, setActiveListing } = props
  const classes = classNames(rootClassName || css.root, className)
  const currentListing = ensureListing(listing)
  const id = currentListing.id.uuid
  const { title = '', price, publicData } = currentListing.attributes
  const slug = createSlug(title)
  const firstImage = currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null
  const listingSkill = publicData?.skill
  const skillOptions = findOptionsForSelectFilter('skill', filtersConfig)
  const skill = publicData ? getItemFromList(skillOptions, listingSkill) : null
  const constellationOptions = findOptionsForSelectFilter(DropdownFieldsType.constellationKey, filtersConfig)

  const musicSoloistOptions = findOptionsForSelectFilter(DropdownFieldsType.musicianSoloKey, filtersConfig)

  const musician = publicData?.musicianSoloType
  const constellation = publicData?.constellation
  let skillTitle = ''

  if (musician) {
    const type = getItemFromList(musicSoloistOptions, musician)
    skillTitle = `${skill.label} • ${type.label}`
  } else if (constellation) {
    const type = getItemFromList(constellationOptions, constellation)
    skillTitle = `${skill.label} • ${type.label}`
  } else {
    skillTitle = skill.label
  }

  const { formattedPrice, priceTitle } = priceData(price, intl)

  const unitType = config.bookingUnitType
  const isNightly = unitType === LINE_ITEM_NIGHT
  const isDaily = unitType === LINE_ITEM_DAY

  const unitTranslationKey = isNightly ? 'ListingCard.perNight' : isDaily ? 'ListingCard.perDay' : 'ListingCard.perUnit'

  return (
    <NamedLink className={classes} name="ListingPage" params={{ id, slug }}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}>
        <div className={css.aspectWrapper}>
          <LazyImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            sizes={renderSizes}
          />
        </div>
      </div>
      <div className={css.info}>
        <div className={css.price}>
          <div className={css.priceValue} title={priceTitle}>
            {formattedPrice}
          </div>
          <div className={css.perUnit}>
            <FormattedMessage id={unitTranslationKey} />
          </div>
        </div>
        <div className={css.mainInfo}>
          <div className={css.title}>
            {richText(title, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
              longWordClass: css.longWord
            })}
          </div>
          <div className={css.skillInfo}>{skill && !skill.hideFromListingInfo ? <span>{skillTitle}</span> : null}</div>
          {/* <div className={css.certificateInfo}>
            {certificate && !certificate.hideFromListingInfo ? (
              <span>{certificate.label}</span>
            ) : null}
          </div> */}
        </div>
      </div>
    </NamedLink>
  )
}

ListingListItemComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  filtersConfig: custom.filters,
  setActiveListing: () => null
}

ListingListItemComponent.propTypes = {
  className: string,
  rootClassName: string,
  filtersConfig: array,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func
}

export default injectIntl(ListingListItemComponent)
