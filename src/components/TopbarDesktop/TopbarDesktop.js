import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'
import classNames from 'classnames'
import { ACCOUNT_SETTINGS_PAGES } from '../../routeConfiguration'
import { propTypes } from '../../util/types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import {
  Avatar,
  InlineTextButton,
  Logo,
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  NamedLink,
  InboxItem,
  IconSpinner,
  Tooltip,
  Button
} from '../../components'
import { TopbarSearchForm } from '../../forms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { txState } from '../../containers/InboxPage/tsState'

import css from './TopbarDesktop.module.css'
import config from '../../config'
import ReactTooltip from 'react-tooltip'

const TopbarDesktop = (props) => {
  const {
    className,
    currentUser,
    currentPage,
    rootClassName,
    currentUserHasListings,
    notificationCount,
    intl,
    isAuthenticated,
    onLogout,
    onSearchSubmit,
    onLanguageSwitch,
    initialSearchFormValues
  } = props
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // setTimeout(() => {
    //   setMounted(true)
    // }, 5000)
    setMounted(true)
  }, [])

  const authenticatedOnClientSide = mounted && isAuthenticated
  const isAuthenticatedOrJustHydrated = isAuthenticated || !mounted

  const classes = classNames(rootClassName || css.root, className)

  const search = (
    <TopbarSearchForm
      className={css.searchLink}
      desktopInputRoot={css.topbarSearchWithLeftPadding}
      onSubmit={onSearchSubmit}
      initialValues={initialSearchFormValues}
    />
  )

  const notificationDot = notificationCount > 0 ? <div className={css.notificationDot} /> : null
  // const { tab } = params
  // const isOrders = tab === 'orders'
  // const toTxItem = (tx) => {
  //   const stateData = txState(intl, tx)

  //   // Render InboxItem only if the latest transition of the transaction is handled in the `txState` function.
  //   return stateData ? (
  //     <MenuItem key={tx.id.uuid} className={css.listItem}>
  //       <InboxItem unitType={unitType} tx={tx} intl={intl} stateData={stateData} />
  //     </MenuItem>
  //   ) : null
  // }

  // const noResults =
  //   !fetchInProgress && transactions.length === 0 && !fetchOrdersOrSalesError ? (
  //     <MenuItem key="noResults">
  //       <FormattedMessage id={isOrders ? 'InboxPage.noOrdersFound' : 'InboxPage.noSalesFound'} />
  //     </MenuItem>
  //   ) : null
  // TODO: notification menu needs to be loaded on app init
  const inboxLink = authenticatedOnClientSide ? (
    <div>
      {/* <Menu>
        <MenuLabel className={css.inboxLink}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
          {notificationDot}
        </MenuLabel>
        <MenuContent className={css.profileMenuContent}>
          {!fetchInProgress ? (
            transactions.map(toTxItem)
          ) : (
            <MenuItem key="isLoading">
              <IconSpinner />
            </MenuItem>
          )}
          {noResults}
        </MenuContent>
      </Menu> */}
      <NamedLink
        tooltipId="notificationTooltip"
        className={css.inboxLink}
        name="InboxPage"
        params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}>
        <span className={css.inbox}>
          <FontAwesomeIcon icon="fa-solid fa-bell" size="xl" />
          {notificationDot}
        </span>
      </NamedLink>
      <ReactTooltip id="notificationTooltip" type="dark" effect="solid">
        <span>
          <FormattedMessage id="TopbarDesktop.notification"></FormattedMessage>
        </span>
      </ReactTooltip>
    </div>
  ) : null

  const listingManagerLink = authenticatedOnClientSide ? (
    <div>
      {currentUserHasListings && (
        <div>
          <NamedLink tooltipId="yourListingsLink" className={css.inboxLink} name="ManageListingsPage">
            <span className={css.inbox}>
              {/* <FormattedMessage id="TopbarDesktop.yourListingsLink" /> */}
              <FontAwesomeIcon icon="fa-solid fa-rectangle-list" size="xl" />
            </span>
          </NamedLink>
          <ReactTooltip id="yourListingsLink" type="dark" effect="solid">
            <span>
              <FormattedMessage id="TopbarDesktop.yourListingsLink"></FormattedMessage>
            </span>
          </ReactTooltip>
        </div>
      )}
    </div>
  ) : null

  const currentPageClass = (page) => {
    const isAccountSettingsPage = page === 'AccountSettingsPage' && ACCOUNT_SETTINGS_PAGES.includes(currentPage)
    return currentPage === page || isAccountSettingsPage ? css.currentPage : null
  }

  const firstNewListing = currentUserHasListings ? (
    <MenuItem key={null}></MenuItem>
  ) : (
    <MenuItem key="FirstNewListingPage">
      <NamedLink className={classNames(css.yourListingsLink, currentPageClass('NewListingPage'))} name="NewListingPage">
        <span className={css.menuItemBorder} />
        <FormattedMessage id="TopbarDesktop.createListing" />
      </NamedLink>
    </MenuItem>
  )

  const profileMenu = authenticatedOnClientSide ? (
    <div>
      <Menu useArrow={true}>
        <MenuLabel
          className={css.profileMenuLabel}
          isOpenClassName={css.profileMenuIsOpen}
          tooltipId="yourProfileLinkContainer">
          <Avatar className={css.avatar} user={currentUser} disableProfileLink />
        </MenuLabel>
        <ReactTooltip id="yourProfileLinkContainer" type="dark" effect="solid">
          <span>
            <FormattedMessage id="TopbarDesktop.yourProfileLink"></FormattedMessage>
          </span>
        </ReactTooltip>
        <MenuContent className={css.profileMenuContent}>
          {firstNewListing}
          <MenuItem key="InboxPage">
            <NamedLink
              className={classNames(css.yourListingsLink, currentPageClass('InboxPage'))}
              name="InboxPage"
              params={{ tab: currentUserHasListings ? 'sales' : 'orders' }}>
              <span className={css.menuItemBorder} />
              <FormattedMessage id="TopbarDesktop.inbox" />
              {notificationDot}
            </NamedLink>
          </MenuItem>
          {/* <MenuItem key="ManageListingsPage">
          <NamedLink
            className={classNames(css.yourListingsLink, currentPageClass('ManageListingsPage'))}
            name="ManageListingsPage">
            <span className={css.menuItemBorder} />
            <FormattedMessage id="TopbarDesktop.yourListingsLink" />
          </NamedLink>
        </MenuItem> */}
          <MenuItem key="ProfileSettingsPage">
            <NamedLink
              className={classNames(css.profileSettingsLink, currentPageClass('ProfileSettingsPage'))}
              name="ProfileSettingsPage">
              <span className={css.menuItemBorder} />
              <FormattedMessage id="TopbarDesktop.profileSettingsLink" />
            </NamedLink>
          </MenuItem>
          <MenuItem key="AccountSettingsPage">
            <NamedLink
              className={classNames(css.yourListingsLink, currentPageClass('AccountSettingsPage'))}
              name="AccountSettingsPage">
              <span className={css.menuItemBorder} />
              <FormattedMessage id="TopbarDesktop.accountSettingsLink" />
            </NamedLink>
          </MenuItem>
          <MenuItem key="logout">
            <InlineTextButton rootClassName={css.logoutButton} onClick={onLogout}>
              <span className={css.menuItemBorder} />
              <FormattedMessage id="TopbarDesktop.logout" />
            </InlineTextButton>
          </MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ) : null

  // const signupLink = isAuthenticatedOrJustHydrated ? null : (
  //   <NamedLink name="SignupPage" className={css.signupLink}>
  //     <span className={css.signup}>
  //       <FormattedMessage id="TopbarDesktop.signup" />
  //     </span>
  //   </NamedLink>
  // )

  const loginLink = isAuthenticatedOrJustHydrated ? null : (
    <NamedLink name="LoginPage" className={css.loginLink}>
      <span className={css.login}>
        <FormattedMessage id="TopbarDesktop.login" />
      </span>
    </NamedLink>
  )

  return (
    <nav className={classes}>
      <NamedLink className={css.logoLink} name="LandingPage">
        <Logo format="desktop" className={css.logo} alt={intl.formatMessage({ id: 'TopbarDesktop.logo' })} />
      </NamedLink>
      {search}
      {/* <NamedLink className={css.createListingLink} name="NewListingPage">
        <span className={css.createListing}>
          <FormattedMessage id="TopbarDesktop.createListing" />
        </span>
      </NamedLink> */}
      {listingManagerLink}
      <ReactTooltip id="yourSwitchLanguageLink" type="dark" effect="solid">
        <span>
          <FormattedMessage id="TopbarDesktop.yourSwitchLanguageLink"></FormattedMessage>
        </span>
      </ReactTooltip>
      <a className={css.loginLink} onClick={onLanguageSwitch} data-tip data-for="yourSwitchLanguageLinkContainer">
        <span className={css.inbox}>
          <FontAwesomeIcon icon="fa-solid fa-globe" size="xl" />
        </span>
      </a>
      <ReactTooltip id="yourSwitchLanguageLinkContainer" type="dark" effect="solid">
        <span>
          <FormattedMessage id="TopbarDesktop.yourSwitchLanguageLink"></FormattedMessage>
        </span>
      </ReactTooltip>
      {profileMenu}
      {inboxLink}
      {/* {signupLink} */}
      {loginLink}
    </nav>
  )
}

const { bool, func, object, number, string } = PropTypes

TopbarDesktop.defaultProps = {
  rootClassName: null,
  className: null,
  currentUser: null,
  currentPage: null,
  notificationCount: 0,
  initialSearchFormValues: {}
}

TopbarDesktop.propTypes = {
  rootClassName: string,
  className: string,
  currentUserHasListings: bool.isRequired,
  currentUser: propTypes.currentUser,
  currentPage: string,
  isAuthenticated: bool.isRequired,
  onLogout: func.isRequired,
  notificationCount: number,
  onSearchSubmit: func.isRequired,
  onLanguageSwitch: func,
  initialSearchFormValues: object,
  intl: intlShape.isRequired
}

export default TopbarDesktop
