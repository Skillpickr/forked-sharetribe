import React, { Component } from 'react'
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
import { lazyLoadWithDimensions } from '../../util/contextHelpers'

import footerTop from './footer_top.png'
import footerLogo from './white_logo_transparent_background.png'

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

class FooterImage extends Component {
  render() {
    const { alt, ...rest } = this.props
    return <img alt={alt} {...rest} />
  }
}
const LazyImage = lazyLoadWithDimensions(FooterImage)

const Footer = (props) => {
  const { rootClassName, className, intl } = props
  const socialMediaLinks = renderSocialMediaLinks(intl)
  const classes = classNames(rootClassName || css.root, className)
  const { siteHelpCenter, sitePricingHelpCenter, siteHowSPWorks } = config
  const goToHC = intl.formatMessage({ id: 'Footer.goToHelpCenter' })
  const goToTeams = intl.formatMessage({ id: 'Footer.goToTeams' })
  const goToPurpose = intl.formatMessage({ id: 'Footer.goToPurpose' })
  const goToGP = intl.formatMessage({ id: 'Footer.goToGP' })
  const goToHCPricing = intl.formatMessage({ id: 'Footer.goToPricingHelpCenter' })

  return (
    <footer className={css.footer}>
      <img alt={'alt'} src={footerTop} className={css.footerImage} />
      <div className={classes}>
        <div className={css.topBorderWrapper}>
          <div className={css.content}>
            {/* <div className={css.someLinksMobile}>{socialMediaLinks}</div> */}
            <div className={css.someLinks}>{socialMediaLinks}</div>

            <div className={css.links}>
              <div className={css.organization} id="organization">
                <NamedLink name="LandingPage" className={css.logoLink}>
                  <span className={css.logo}>
                    <img alt={'alt'} src={footerLogo} className={css.footerImage} />
                  </span>
                </NamedLink>
                {/* <div className={css.organizationInfo}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <p className={css.link}>
                      <strong>About us</strong>
                    </p>
                  </li>
                </ul>
              </div> */}
              </div>
              <div className={css.infoLinks}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <p className={css.linkTitle}>
                      <strong>
                        <FormattedMessage id="Footer.sell.title" />
                      </strong>
                    </p>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="WelcomePage" className={css.link}>
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
                    <p className={css.linkTitle}>
                      <strong>
                        <FormattedMessage id="Footer.categories.title" />
                      </strong>
                    </p>
                  </li>
                  <li className={css.listItem}>
                    {' '}
                    <NamedLink
                      name="SearchPage"
                      to={{ search: '?pub_category=performance' }}
                      className={css.link}
                      title={'Explore all skills related to Performance & Entertainment'}>
                      <FormattedMessage id="Footer.toPerformance" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    {' '}
                    <NamedLink
                      name="SearchPage"
                      to={{ search: '?pub_category=creative' }}
                      className={css.link}
                      title={'Explore all skills related to other Creative Artists'}>
                      <FormattedMessage id="Footer.toCreative" />
                    </NamedLink>
                  </li>
                  {/* <li className={css.listItem}>
                  {' '}
                  <NamedLink name="SearchPage" to={{ search: 'knowledge' }} className={css.link} title={goToHC}>
                    Knowledge (coming soon)
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  {' '}
                  <NamedLink name="SearchPage" to={{ search: 'audio-prod' }} className={css.link} title={goToHC}>
                    Audio Production
                  </NamedLink>
                </li> */}
                  <li className={css.listItem}>
                    <ExternalLink key="linkToHelpCenter" href={siteHowSPWorks} className={css.link}>
                      <FormattedMessage id="Footer.toBuyerHelpCenter" />
                    </ExternalLink>
                  </li>
                </ul>
              </div>
              <div className={css.aboutUs}>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <p className={css.linkTitle}>
                      <strong>
                        <FormattedMessage id="Footer.aboutUs.title" />
                      </strong>
                    </p>
                  </li>
                  <li className={css.listItem}>
                    {' '}
                    <NamedLink name="TeamsPage" className={css.link} title={goToTeams}>
                      <FormattedMessage id="Footer.toTeamsPage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    {' '}
                    <NamedLink name="PurposePage" className={css.link} title={goToPurpose}>
                      <FormattedMessage id="Footer.toPurposePage" />
                    </NamedLink>
                  </li>
                  <li className={css.listItem}>
                    <NamedLink name="GuidingPrincipalsPage" className={css.link} title={goToGP}>
                      <FormattedMessage id="Footer.toGPPage" />
                    </NamedLink>
                  </li>
                </ul>
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
    </footer>
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
