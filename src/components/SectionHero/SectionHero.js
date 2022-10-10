import React, { useEffect, useState, setData } from 'react'
import { string } from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { NamedLink } from '../../components'
import { locationBounds } from '../LocationAutocompleteInput/GeocoderMapbox'
import css from './SectionHero.module.css'
import { userLocation } from '../../util/maps'
import config from '../../config'
import { stringify } from '../../util/urlHelpers'

const SectionHero = (props) => {
  const [mounted, setMounted] = useState(false)
  const { rootClassName, className } = props.className
  const [location, setLocation] = useState('')

  useEffect(() => {
    setMounted(true)
    userLocation().then((latlng) =>
      setLocation({
        address: '',
        origin: latlng,
        bounds: locationBounds(latlng, config.maps.search.currentLocationBoundsDistance)
      })
    )
  }, [])

  const classes = classNames(rootClassName || css.root, className)

  // Use find the ip location of the client
  let urlString
  if (location) {
    const { origin, bounds } = location
    const originMaybe = config.sortSearchByDistance ? { origin } : {}

    const searchParams = {
      ...originMaybe,
      bounds
    }
    const searchQuery = stringify(searchParams)
    const includeSearchQuery = searchQuery.length > 0 ? `?${searchQuery}` : ''
    urlString = includeSearchQuery
  }

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={classNames(css.heroMainTitle, { [css.heroMainTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        {/* <h2 className={classNames(css.heroSubTitle, { [css.heroSubTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2> */}
        {location && (
          <NamedLink
            name="SearchPage"
            to={{ search: urlString }}
            className={classNames(css.heroButton, { [css.heroButtonFEDelay]: mounted })}>
            <FormattedMessage id="SectionHero.browseButton" />
          </NamedLink>
        )}
      </div>
    </div>
  )
}

SectionHero.defaultProps = { rootClassName: null, className: null }

SectionHero.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionHero
