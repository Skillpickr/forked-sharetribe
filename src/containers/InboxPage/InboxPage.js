import React from 'react'
import { arrayOf, bool, number, oneOf, shape, string } from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import classNames from 'classnames'

import { propTypes, DATE_TYPE_DATETIME } from '../../util/types'
import { createSlug, stringify } from '../../util/urlHelpers'
import { ensureCurrentUser, ensureListing } from '../../util/data'
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import {
  NotificationBadge,
  Page,
  PaginationLinks,
  TabNav,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  IconSpinner,
  InboxItem
} from '../../components'
import { TopbarContainer, NotFoundPage } from '../../containers'
import config from '../../config'
import { txState } from './tsState'

import css from './InboxPage.module.css'

export const InboxPageComponent = (props) => {
  const {
    unitType,
    currentUser,
    currentUserListing,
    fetchInProgress,
    fetchOrdersOrSalesError,
    intl,
    pagination,
    params,
    providerNotificationCount,
    scrollingDisabled,
    transactions
  } = props
  const { tab } = params
  const ensuredCurrentUser = ensureCurrentUser(currentUser)

  const validTab = tab === 'orders' || tab === 'sales'
  if (!validTab) {
    return <NotFoundPage />
  }

  const isOrders = tab === 'orders'

  const ordersTitle = intl.formatMessage({ id: 'InboxPage.ordersTitle' })
  const salesTitle = intl.formatMessage({ id: 'InboxPage.salesTitle' })
  const title = isOrders ? ordersTitle : salesTitle

  const toTxItem = (tx) => {
    const type = isOrders ? 'order' : 'sale'
    const stateData = txState(intl, tx, type)

    // Render InboxItem only if the latest transition of the transaction is handled in the `txState` function.
    return stateData ? (
      <li key={tx.id.uuid} className={css.listItem}>
        <InboxItem unitType={unitType} type={type} tx={tx} intl={intl} stateData={stateData} />
      </li>
    ) : null
  }

  const error = fetchOrdersOrSalesError ? (
    <p className={css.error}>
      <FormattedMessage id="InboxPage.fetchFailed" />
    </p>
  ) : null

  const noResults =
    !fetchInProgress && transactions.length === 0 && !fetchOrdersOrSalesError ? (
      <li key="noResults" className={css.noResults}>
        <FormattedMessage id={isOrders ? 'InboxPage.noOrdersFound' : 'InboxPage.noSalesFound'} />
      </li>
    ) : null

  const hasOrderOrSaleTransactions = (tx, isOrdersTab, user) => {
    return isOrdersTab
      ? user.id && tx && tx.length > 0 && tx[0].customer.id.uuid === user.id.uuid
      : user.id && tx && tx.length > 0 && tx[0].provider.id.uuid === user.id.uuid
  }
  const hasTransactions = !fetchInProgress && hasOrderOrSaleTransactions(transactions, isOrders, ensuredCurrentUser)
  const pagingLinks =
    hasTransactions && pagination && pagination.totalPages > 1 ? (
      <PaginationLinks
        className={css.pagination}
        pageName="InboxPage"
        pagePathParams={params}
        pagination={pagination}
      />
    ) : null

  const providerNotificationBadge =
    providerNotificationCount > 0 ? <NotificationBadge count={providerNotificationCount} /> : null

  const tabs = [
    {
      text: (
        <span>
          <FormattedMessage id="InboxPage.ordersTabTitle" />
        </span>
      ),
      selected: isOrders,
      linkProps: {
        name: 'InboxPage',
        params: { tab: 'orders' }
      }
    },
    {
      text: (
        <span>
          <FormattedMessage id="InboxPage.salesTabTitle" />
          {providerNotificationBadge}
        </span>
      ),
      selected: !isOrders,
      linkProps: {
        name: 'InboxPage',
        params: { tab: 'sales' }
      }
    }
  ]
  const nav = <TabNav rootClassName={css.tabs} tabRootClassName={css.tab} tabs={tabs} />

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer
            className={css.topbar}
            mobileRootClassName={css.mobileTopbar}
            desktopClassName={css.desktopTopbar}
            currentPage="InboxPage"
          />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav className={css.navigation}>
          <h1 className={css.title}>
            <FormattedMessage id="InboxPage.title" />
          </h1>
          {currentUserListing ? nav : <div className={css.navPlaceholder} />}
        </LayoutWrapperSideNav>
        <LayoutWrapperMain>
          {error}
          <ul className={css.itemList}>
            {!fetchInProgress ? (
              transactions.map(toTxItem)
            ) : (
              <li className={css.listItemsLoading}>
                <IconSpinner />
              </li>
            )}
            {noResults}
          </ul>
          {pagingLinks}
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  )
}

InboxPageComponent.defaultProps = {
  unitType: config.bookingUnitType,
  currentUser: null,
  currentUserListing: null,
  currentUserHasOrders: null,
  fetchOrdersOrSalesError: null,
  pagination: null,
  providerNotificationCount: 0,
  sendVerificationEmailError: null
}

InboxPageComponent.propTypes = {
  params: shape({
    tab: string.isRequired
  }).isRequired,

  unitType: propTypes.bookingUnitType,
  currentUser: propTypes.currentUser,
  currentUserListing: propTypes.ownListing,
  fetchInProgress: bool.isRequired,
  fetchOrdersOrSalesError: propTypes.error,
  pagination: propTypes.pagination,
  providerNotificationCount: number,
  scrollingDisabled: bool.isRequired,
  transactions: arrayOf(propTypes.transaction).isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  const { fetchInProgress, fetchOrdersOrSalesError, pagination, transactionRefs } = state.InboxPage
  const { currentUser, currentUserListing, currentUserNotificationCount: providerNotificationCount } = state.user
  return {
    currentUser,
    currentUserListing,
    fetchInProgress,
    fetchOrdersOrSalesError,
    pagination,
    providerNotificationCount,
    scrollingDisabled: isScrollingDisabled(state),
    transactions: getMarketplaceEntities(state, transactionRefs)
  }
}

const InboxPage = compose(connect(mapStateToProps), injectIntl)(InboxPageComponent)

export default InboxPage
