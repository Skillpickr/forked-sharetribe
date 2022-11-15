import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import { TopbarContainer } from '../../containers'
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  PrivacyPolicy,
  Footer
} from '../../components'
import config from '../../config'

import css from './GuidingPrincipalsPage.module.css'

const PrivacyPolicyPageComponent = (props) => {
  const { scrollingDisabled, intl } = props

  const tabs = [
    {
      text: intl.formatMessage({ id: 'GuidingPrincipalsPage.teamTabTitle' }),
      selected: false,
      linkProps: {
        name: 'GuidingPrincipalsPage'
      }
    },
    {
      text: intl.formatMessage({ id: 'GuidingPrincipalsPage.purposeTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PurposePage'
      }
    },
    {
      text: intl.formatMessage({ id: 'GuidingPrincipalsPage.GPTabTitle' }),
      selected: true,
      linkProps: {
        name: 'GuidingPrincipalsPage'
      }
    }
  ]
  const siteTitle = config.siteTitle
  const schemaTitle = intl.formatMessage({ id: 'GuidingPrincipalsPage.schemaTitle' }, { siteTitle })
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle
  }
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="GuidingPrincipalsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="GuidingPrincipalsPage.heading" />
            </h1>
            <PrivacyPolicy />
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

PrivacyPolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  }
}

const GuidingPrincipalsPage = compose(connect(mapStateToProps), injectIntl)(PrivacyPolicyPageComponent)

export default GuidingPrincipalsPage
