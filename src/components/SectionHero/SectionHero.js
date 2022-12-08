import React, { useEffect, useState } from 'react'
import { string, object } from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { NamedLink } from '../../components'
import { locationBounds } from '../LocationAutocompleteInput/GeocoderMapbox'
import css from './SectionHero.module.css'
import { userLocation } from '../../util/maps'
import config from '../../config'
import { stringify } from '../../util/urlHelpers'

const SectionHero = (props) => {
  const { location } = props
  const { rootClassName, className } = props.className
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

  const classes = classNames(rootClassName || css.root, className)

  // Use find the ip ipLocation of the client
  let urlString
  if (ipLocation) {
    const { origin, bounds } = ipLocation
    const originMaybe = config.sortSearchByDistance ? { origin } : {}

    const searchParams = {
      ...originMaybe,
      bounds
    }
    const searchQuery = stringify(searchParams)
    const includeSearchQuery = searchQuery.length > 0 ? `?${searchQuery}` : ''
    urlString = includeSearchQuery
  } else {
    urlString = ''
  }

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h2 className={classNames(css.heroMainTitle, { [css.heroMainTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.title" />
        </h2>
        {/* <h2 className={classNames(css.heroSubTitle, { [css.heroSubTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2> */}

        <NamedLink
          name="SearchPage"
          to={{ search: urlString }}
          className={classNames(css.heroButton, { [css.heroButtonFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  )
}

SectionHero.defaultProps = { rootClassName: null, className: null, location: '' }

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
  location: object
}

export default SectionHero
