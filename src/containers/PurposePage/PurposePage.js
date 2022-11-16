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
  Purpose,
  Footer
} from '../../components'
import config from '../../config'

import css from './PurposePage.module.css'

const PurposePageComponent = (props) => {
  const { scrollingDisabled, intl } = props

  const tabs = [
    {
      text: intl.formatMessage({ id: 'PurposePage.teamTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TeamsPage'
      }
    },
    {
      text: intl.formatMessage({ id: 'PurposePage.purposeTabTitle' }),
      selected: true,
      linkProps: {
        name: 'PurposePage'
      }
    },
    {
      text: intl.formatMessage({ id: 'PurposePage.GPTabTitle' }),
      selected: false,
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
          <TopbarContainer currentPage="PurposePage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="PurposePage.heading" />
            </h1>
            <Purpose />
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

PurposePageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  }
}

const PurposePage = compose(connect(mapStateToProps), injectIntl)(PurposePageComponent)

export default PurposePage
