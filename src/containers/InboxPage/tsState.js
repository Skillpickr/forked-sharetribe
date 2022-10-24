import {
  txIsAccepted,
  txIsCanceled,
  txIsDeclined,
  txIsEnquired,
  txIsRequested,
  txHasBeenDelivered,
  txIsPaymentExpired,
  txIsPaymentPending
} from '../../util/transaction'
import css from './InboxPage.module.css'

// Translated name of the state of the given transaction
export const txState = (intl, tx, type) => {
  const isOrder = type === 'order'

  if (txIsEnquired(tx)) {
    return {
      nameClassName: isOrder ? css.nameNotEmphasized : css.nameEmphasized,
      bookingClassName: css.bookingActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtEmphasized,
      stateClassName: css.stateActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.stateEnquiry'
      })
    }
  } else if (txIsRequested(tx)) {
    const requested = isOrder
      ? {
          nameClassName: css.nameNotEmphasized,
          bookingClassName: css.bookingNoActionNeeded,
          lastTransitionedAtClassName: css.lastTransitionedAtEmphasized,
          stateClassName: css.stateActionNeeded,
          state: intl.formatMessage({
            id: 'InboxPage.stateRequested'
          })
        }
      : {
          nameClassName: css.nameEmphasized,
          bookingClassName: css.bookingActionNeeded,
          lastTransitionedAtClassName: css.lastTransitionedAtEmphasized,
          stateClassName: css.stateActionNeeded,
          state: intl.formatMessage({
            id: 'InboxPage.statePending'
          })
        }

    return requested
  } else if (txIsPaymentPending(tx)) {
    return {
      nameClassName: isOrder ? css.nameNotEmphasized : css.nameEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: isOrder ? css.stateActionNeeded : css.stateNoActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.statePendingPayment'
      })
    }
  } else if (txIsPaymentExpired(tx)) {
    return {
      nameClassName: css.nameNotEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: css.stateNoActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.stateExpired'
      })
    }
  } else if (txIsDeclined(tx)) {
    return {
      nameClassName: css.nameNotEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: css.stateNoActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.stateDeclined'
      })
    }
  } else if (txIsAccepted(tx)) {
    return {
      nameClassName: css.nameNotEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: css.stateSucces,
      state: intl.formatMessage({
        id: 'InboxPage.stateAccepted'
      })
    }
  } else if (txIsCanceled(tx)) {
    return {
      nameClassName: css.nameNotEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: css.stateNoActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.stateCanceled'
      })
    }
  } else if (txHasBeenDelivered(tx)) {
    return {
      nameClassName: css.nameNotEmphasized,
      bookingClassName: css.bookingNoActionNeeded,
      lastTransitionedAtClassName: css.lastTransitionedAtNotEmphasized,
      stateClassName: css.stateNoActionNeeded,
      state: intl.formatMessage({
        id: 'InboxPage.stateDelivered'
      })
    }
  } else {
    console.warn('This transition is unknown:', tx.attributes.lastTransition)
    return null
  }
}
