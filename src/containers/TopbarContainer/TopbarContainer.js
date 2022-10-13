import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { propTypes } from '../../util/types'
import { sendVerificationEmail, hasCurrentUserErrors } from '../../ducks/user.duck'
import { logout, authenticationInProgress } from '../../ducks/Auth.duck'
import { manageDisableScrolling } from '../../ducks/UI.duck'
import { Topbar } from '../../components'
import { closeListing, openListing, getOwnListingsById } from '../ManageListingsPage/ManageListingsPage.duck'

export const TopbarContainerComponent = (props) => {
  const {
    authInProgress,
    currentPage,
    currentSearchParams,
    currentUser,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    currentUserHasOrders,
    history,
    isAuthenticated,
    authScopes,
    hasGenericError,
    location,
    notificationCount,
    onLogout,
    onManageDisableScrolling,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    onResendVerificationEmail,
    listings,
    ...rest
  } = props
  return (
    <Topbar
      authInProgress={authInProgress}
      currentPage={currentPage}
      currentSearchParams={currentSearchParams}
      currentUser={currentUser}
      currentUserHasListings={currentUserHasListings}
      currentUserListing={currentUserListing}
      currentUserListingFetched={currentUserListingFetched}
      currentUserHasOrders={currentUserHasOrders}
      history={history}
      isAuthenticated={isAuthenticated}
      authScopes={authScopes}
      location={location}
      notificationCount={notificationCount}
      onLogout={onLogout}
      onManageDisableScrolling={onManageDisableScrolling}
      onResendVerificationEmail={onResendVerificationEmail}
      sendVerificationEmailInProgress={sendVerificationEmailInProgress}
      sendVerificationEmailError={sendVerificationEmailError}
      showGenericError={hasGenericError}
      listings={listings}
      {...rest}
    />
  )
}

const { arrayOf, bool, func, object, shape, string, array, number } = PropTypes

TopbarContainerComponent.defaultProps = {
  currentPage: null,
  currentSearchParams: null,
  currentUser: null,
  currentUserHasOrders: null,
  notificationCount: 0,
  sendVerificationEmailError: null,
  currentUserListing: null,
  authScopes: null,
  listings: []
}

TopbarContainerComponent.propTypes = {
  authInProgress: bool.isRequired,
  currentPage: string,
  currentSearchParams: object,
  currentUser: propTypes.currentUser,
  currentUserHasListings: bool.isRequired,
  currentUserListingFetched: bool.isRequired,
  currentUserListing: propTypes.ownListing,
  currentUserHasOrders: bool,
  isAuthenticated: bool.isRequired,
  authScopes: array,
  notificationCount: number,
  onLogout: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  sendVerificationEmailInProgress: bool.isRequired,
  sendVerificationEmailError: propTypes.error,
  onResendVerificationEmail: func.isRequired,
  hasGenericError: bool.isRequired,
  listings: arrayOf(propTypes.ownListing),

  // from withRouter
  history: shape({
    push: func.isRequired
  }).isRequired,
  location: shape({ state: object }).isRequired
}

const mapStateToProps = (state) => {
  // Topbar needs isAuthenticated
  const { isAuthenticated, logoutError, authScopes } = state.Auth
  // Topbar needs user info.
  const {
    currentUser,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    currentUserHasOrders,
    currentUserNotificationCount: notificationCount,
    sendVerificationEmailInProgress,
    sendVerificationEmailError
  } = state.user
  const hasGenericError = !!(logoutError || hasCurrentUserErrors(state))
  const { currentPageResultIds } = state.ManageListingsPage
  const listings = getOwnListingsById(state, currentPageResultIds)

  return {
    currentPageResultIds,
    listings,
    authInProgress: authenticationInProgress(state),
    currentUser,
    currentUserHasListings,
    currentUserListing,
    currentUserListingFetched,
    currentUserHasOrders,
    notificationCount,
    isAuthenticated,
    authScopes,
    sendVerificationEmailInProgress,
    sendVerificationEmailError,
    hasGenericError
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: (historyPush) => dispatch(logout(historyPush)),
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onResendVerificationEmail: () => dispatch(sendVerificationEmail())
})

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const TopbarContainer = compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(TopbarContainerComponent)

export default TopbarContainer
