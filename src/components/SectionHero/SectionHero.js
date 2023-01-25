import React, { useEffect, useState } from 'react'
import { string, object } from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import classNames from 'classnames'
import {
  NamedLink,
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  ExternalLink,
  Button,
  Modal
} from '../../components'
import { locationBounds } from '../LocationAutocompleteInput/GeocoderMapbox'
import css from './SectionHero.module.css'
import { userLocation } from '../../util/maps'
import config from '../../config'
import { stringify } from '../../util/urlHelpers'
import { twitterPageURL } from '../../util/urlHelpers'
import { propTypes } from '../../util/types'

const SectionHero = (props) => {
  const { locationm, intl, currentUser, onManageDisableScrolling } = props
  console.log(onManageDisableScrolling)
  const { rootClassName, className } = props.className
  const [mounted, setMounted] = useState(false)
  const [ipLocation, setIpLocation] = useState('')
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' })
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' })
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' })

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

  const signupButton = currentUser ? (
    <NamedLink name="NewListingPage" className={classNames(css.heroButton)}>
      <FormattedMessage id="SectionHero.createListing" />
    </NamedLink>
  ) : (
    <NamedLink name="SignupPage" className={classNames(css.heroButton)}>
      <FormattedMessage id="SectionHero.signUp" />
    </NamedLink>
  )
  const [isOpen, setOpen] = useState(false)
  const [video, setVideo] = useState('https://www.loom.com/embed/131bb7185a86438cb035484934fcd79e')

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <div className={classNames({ [css.heroMainTitleFEDelay]: mounted })}>
          <h2 className={classNames(css.heroMainTitle)}>
            <FormattedMessage id="SectionHero.title" />
          </h2>
          {/* <h2 className={classNames(css.heroSubTitle, { [css.heroSubTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.subTitle" />
          </h2> */}
          <div className={css.cta}>
            <NamedLink name="SearchPage" to={{ search: urlString }} className={classNames(css.heroButton)}>
              <FormattedMessage id="SectionHero.browseButton" />
            </NamedLink>

            {signupButton}

            <Button onClick={handleOpen} className={classNames(css.heroButton)}>
              <FormattedMessage id="SectionHero.introductionVideo" />
            </Button>
          </div>
        </div>
        <div className={css.someLinks}>
          <FormattedMessage id="SectionHero.followUs" />
          <ExternalLink key="linkToInstagram" href={siteInstagramPage} className={css.icon} title={goToInsta} noIcon>
            <IconSocialMediaInstagram classNames={css.insta} />
          </ExternalLink>
          <FormattedMessage id="SectionHero.or" />
          <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb} noIcon>
            <IconSocialMediaFacebook />
          </ExternalLink>
          <FormattedMessage id="SectionHero.latestUpdate" />
        </div>
      </div>

      {onManageDisableScrolling ? (
        <Modal
          id="SectionHero.introductionVideo"
          {...props}
          isOpen={isOpen}
          onClose={() => {
            setOpen(false)
          }}
          onManageDisableScrolling={onManageDisableScrolling}>
          {isOpen && (
            <iframe
              src={video}
              style={{ marginTop: 72, width: '100%', height: '100%', minHeight: 400 }}
              webkitallowfullscreen
              mozallowfullscreen
              allowFullScreen></iframe>
          )}
        </Modal>
      ) : null}
    </div>
  )
}

SectionHero.defaultProps = { rootClassName: null, className: null, location: '', currentUser: null }

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
  location: object,
  currentUser: propTypes.currentUser,
  intl: intlShape.isRequired
}

export default injectIntl(SectionHero)
