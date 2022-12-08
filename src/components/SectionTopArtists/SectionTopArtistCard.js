import React, { Component } from 'react'
import { array, string, func } from 'prop-types'
import classNames from 'classnames'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'

import config from '../../config'
import { findOptionsForSelectFilter } from '../../util/search'
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types'

import { formatMoney } from '../../util/currency'
import { ListingCard, NamedLink, ResponsiveImage } from '../../components'
import { ensureListing } from '../../util/data'
import { createSlug } from '../../util/urlHelpers'
import { Skills } from '../../util/category'
import * as custom from '../../marketplace-custom-config.js'

import css from './SectionTopArtists.module.css'

const getSkillInfo = (skillOptions, key) => {
  return skillOptions.find((c) => c.key === key)
}

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
const SectionTopArtistsCard = (props) => {
  const { className, rootClassName, intl, listing, filtersConfig, setActiveListing } = props
  const classes = classNames(rootClassName || css.root, className)
  const currentListing = ensureListing(listing)
  const id = currentListing.id.uuid
  const { title = '', price, publicData } = currentListing.attributes
  const slug = createSlug(title)
  const firstImage = currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null
  const skillOptions = findOptionsForSelectFilter('skill', filtersConfig)
  const skill = publicData ? getSkillInfo(skillOptions, publicData.skill) : null

  const musicSoloistOptions = findOptionsForSelectFilter('musicianSoloType', filtersConfig)
  const musicianSoloType = publicData ? getSkillInfo(musicSoloistOptions, publicData.musicianSoloType) : null

  let skillTitle = ''
  if (skill) {
    if (skill.key === Skills.musician) {
      skillTitle = skill.label + ' • ' + musicianSoloType.label
    } else {
      skillTitle = skill.label
    }
  }

  const { formattedPrice, priceTitle } = priceData(price, intl)

  const unitType = config.bookingUnitType
  const isNightly = unitType === LINE_ITEM_NIGHT
  const isDaily = unitType === LINE_ITEM_DAY

  const unitTranslationKey = isNightly ? 'ListingCard.perNight' : isDaily ? 'ListingCard.perDay' : 'ListingCard.perUnit'

  return (
    <div
      className={classNames(css.slide, css.mx2)}
      onMouseEnter={() => setActiveListing(currentListing.id)}
      onMouseLeave={() => setActiveListing(null)}>
      <div className={classNames(css.card, css.nftItems, css.nftPrimary)}>
        <div className={css.nftImage}>
          <ResponsiveImage
            rootClassName={css.imgFluid}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            className={css.imgFluid}
          />
          <div className={css.bidBtn}>
            <NamedLink className={css.artistButton} name="ListingPage" params={{ id, slug }}>
              {' '}
              Se Mere
            </NamedLink>
            <div className={classes}>
              <div className={css.info}>
                <div className={css.price}>
                  <div className={css.priceValue} title={priceTitle}>
                    {formattedPrice}
                  </div>
                  <div className={css.perUnit}>
                    {' '}
                    <FormattedMessage id={unitTranslationKey} />
                  </div>
                </div>
                <div className={css.mainInfo}>
                  <div className={css.title}>{title}</div>
                  <div className={css.skillInfo}>
                    {skill && !skill.hideFromListingInfo ? <span>{skillTitle}</span> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionTopArtistsCard.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  filtersConfig: custom.filters,
  setActiveListing: () => null
}

SectionTopArtistsCard.propTypes = {
  className: string,
  rootClassName: string,
  filtersConfig: array,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func
}

export default SectionTopArtistsCard
