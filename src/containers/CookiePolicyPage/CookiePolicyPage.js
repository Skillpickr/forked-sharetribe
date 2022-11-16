import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import { TopbarContainer } from '..'
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  CookiePolicy,
  Footer
} from '../../components'
import config from '../../config'

import css from './CookiePolicyPage.module.css'

const CookiePolicyPageComponent = (props) => {
  const { scrollingDisabled, intl } = props

  const tabs = [
    {
      text: intl.formatMessage({ id: 'CookiePolicyPage.privacyTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PrivacyPolicyPage'
      }
    },
    {
      text: intl.formatMessage({ id: 'CookiePolicyPage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage'
      }
    },
    {
      text: intl.formatMessage({ id: 'CookiePolicyPage.cookieTabTitle' }),
      selected: true,
      linkProps: {
        name: 'CookiePolicyPage'
      }
    }
  ]
  const siteTitle = config.siteTitle
  const schemaTitle = intl.formatMessage({ id: 'CookiePolicyPage.schemaTitle' }, { siteTitle })
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle
  }
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="CookiePolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="CookiePolicyPage.heading" />
            </h1>
            <CookiePolicy />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  )
}

const { bool } = PropTypes

CookiePolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  }
}

const CookiePolicyPage = compose(connect(mapStateToProps), injectIntl)(CookiePolicyPageComponent)

export default CookiePolicyPage
