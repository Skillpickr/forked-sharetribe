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
  const { siteHelpCenter, sitePricingHelpCenter } = config
  const goToHC = intl.formatMessage({ id: 'Footer.goToHelpCenter' })
  const goToHCPricing = intl.formatMessage({ id: 'Footer.goToHelpCenter' })

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          {/* <div className={css.someLinksMobile}>{socialMediaLinks}</div> */}
          <div className={css.someLinks}>{socialMediaLinks}</div>

          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <span className={css.logo}>
                  <Logo format="desktop" />
                </span>
              </NamedLink>
              <div className={css.organizationInfo}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <p className={css.link}>
                      <strong>About us</strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <p className={css.link}>
                    <strong>Sell</strong>
                  </p>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>

                <li className={css.listItem}>
                  <ExternalLink
                    key="linkToPricing"
                    href={sitePricingHelpCenter}
                    className={css.link}
                    title={goToHCPricing}>
                    <FormattedMessage id="Footer.toPricingPage" />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    <FormattedMessage id="Footer.toHelpCenter" />
                  </ExternalLink>
                </li>

                {/* <li className={css.listItem}>
                  <NamedLink name="ContactPage" className={css.link}>
                    <FormattedMessage id="Footer.toContactPage" />
                  </NamedLink>
                </li> */}
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <p className={css.link}>
                    <strong>Categories</strong>
                  </p>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Performance & Entertainment
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Creatives
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Knowledge (coming soon)
                  </ExternalLink>{' '}
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Audio Production (coming soon)
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    <FormattedMessage id="Footer.toHelpCenter" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
            <div className={css.aboutUs}>
              <ul className={css.list}>
                <li className={css.listItem}>
                  <p className={css.link}>
                    <strong>About us</strong>
                  </p>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Team
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Purpose
                  </ExternalLink>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <ExternalLink key="linkToHelpCenter" href={siteHelpCenter} className={css.link} title={goToHC}>
                    Guiding Principles
                  </ExternalLink>{' '}
                </li>
                <li className={css.listItem}>
                  <NamedLink name="AboutPage" className={css.link}>
                    <FormattedMessage id="Footer.toAboutPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            {/* <div className={css.extraLinks}>
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
            </div> */}
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.privacy}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
              <NamedLink name="CookiePolicyPage" className={css.terms}>
                <FormattedMessage id="Footer.cookiePolicy" />
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
