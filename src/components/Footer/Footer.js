import React from 'react'
import { string } from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import classNames from 'classnames'
import { twitterPageURL } from '../../util/urlHelpers'
import config from '../../config'
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink
} from '../../components'

import css from './Footer.module.css'

const renderSocialMediaLinks = (intl) => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config
  const siteTwitterPage = twitterPageURL(siteTwitterHandle)

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' })
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' })
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' })

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null

  const twitterLink = siteTwitterPage ? (
    <ExternalLink key="linkToTwitter" href={siteTwitterPage} className={css.icon} title={goToTwitter}>
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null

  const instragramLink = siteInstagramPage ? (
    <ExternalLink key="linkToInstagram" href={siteInstagramPage} className={css.icon} title={goToInsta}>
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null
  return [fbLink, twitterLink, instragramLink].filter((v) => v != null)
}

const Footer = (props) => {
  const { rootClassName, className, intl } = props
  const socialMediaLinks = renderSocialMediaLinks(intl)
  const classes = classNames(rootClassName || css.root, className)
  const { siteHelpCenter } = config
  const goToHC = intl.formatMessage({ id: 'Footer.goToHelpCenter' })

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <span className={css.logo}>
                  <Logo format="desktop" />
                </span>
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="PricingPage" className={css.link}>
                    <FormattedMessage id="Footer.toPricingPage" />
                  </NamedLink>
                </li>
                <li>
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    <FormattedMessage id="Footer.toHelpCenter" />
                  </ExternalLink>
                </li>
                {/* <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="LandingPage" className={css.link}>
                    <FormattedMessage id="Footer.toHelpPage" />
                  </NamedLink>
                </li> */}
                <li className={css.listItem}>
                  <NamedLink name="ContactPage" className={css.link}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  {/* <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchCopenhagen" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Odense%2C%20RegionSouthern%20Denmark%2C%20Denmark&bounds=55.482592%2C10.576854%2C55.288122%2C10.221037',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchOdense" />
                  </NamedLink>  */}
                </li>
              </ul>
            </div>
            {/* <div className={css.searchesExtra}>
              <ul className={css.list}>
                <li className={css.listItem}>
                   <NamedLink
                    name="SearchPage"
                    to={{
                      search:
                        '?address=Aarhus%2C%20Central%20Denmark%20Region%2C%20Denmark&bounds=56.240905%2C10.255086%2C56.117521%2C10.114294',
                    }}
                    className={css.link}
                  >
                    <FormattedMessage id="Footer.searchAarhus" />
                  </NamedLink> 
                </li>
              </ul>
            </div> */}
            <div className={css.extraLinks}>
              <div className={css.someLinks}>{socialMediaLinks}</div>
              <div className={css.legalMatters}>
                <ul className={css.tosAndPrivacy}>
                  <li>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                      <FormattedMessage id="Footer.termsOfUse" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />
                    </NamedLink>
                  </li>
                  <li>
                    <NamedLink name="CookiePolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.cookiePolicy" />
                    </NamedLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: null,
  className: null
}

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired
}

export default injectIntl(Footer)
