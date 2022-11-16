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
  Teams,
  Footer
} from '../../components'
import config from '../../config'

import css from './TeamsPage.module.css'

const TeamsPageComponent = (props) => {
  const { scrollingDisabled, intl } = props

  const tabs = [
    {
      text: intl.formatMessage({ id: 'TeamsPage.teamTabTitle' }),
      selected: true,
      linkProps: {
        name: 'TeamsPage'
      }
    },
    {
      text: intl.formatMessage({ id: 'TeamsPage.purposeTabTitle' }),
      selected: false,
      linkProps: {
        name: 'PurposePage'
      }
    },
    {
      text: intl.formatMessage({ id: 'TeamsPage.GPTabTitle' }),
      selected: false,
      linkProps: {
        name: 'GuidingPrincipalsPage'
      }
    }
  ]
  const siteTitle = config.siteTitle
  const schemaTitle = intl.formatMessage({ id: 'TeamsPage.schemaTitle' }, { siteTitle })
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle
  }
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="TeamsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="TeamsPage.heading" />
            </h1>
            <Teams />
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

TeamsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  }
}

const TeamsPage = compose(connect(mapStateToProps), injectIntl)(TeamsPageComponent)

export default TeamsPage
