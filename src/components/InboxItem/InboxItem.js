import React from 'react'
import { oneOf } from 'prop-types'
import { FormattedMessage, intlShape } from '../../util/reactIntl'
import classNames from 'classnames'
import { txIsRequested } from '../../util/transaction'
import { propTypes } from '../../util/types'
import { createSlug, stringify } from '../../util/urlHelpers'
import { Avatar, BookingInfoMaybe, NamedLink, UserDisplayName } from '../../components'
import css from './InboxItem.module.css'

const formatDate = (intl, date) => {
  return {
    short: intl.formatDate(date, {
      month: 'short',
      day: 'numeric'
    }),
    long: `${intl.formatDate(date)} ${intl.formatTime(date)}`
  }
}

const createListingLink = (listing, otherUser, searchParams = {}, className = '') => {
  const listingId = listing.id && listing.id.uuid
  const label = listing.attributes.title
  const listingDeleted = listing.attributes.deleted

  if (!listingDeleted) {
    const params = { id: listingId, slug: createSlug(label) }
    const to = { search: stringify(searchParams) }
    return (
      <NamedLink className={className} name="ListingPage" params={params} to={to}>
        <Avatar user={otherUser} disableProfileLink />
      </NamedLink>
    )
  } else {
    return <FormattedMessage id="TransactionPanel.deletedListingOrderTitle" />
  }
}

const InboxItem = (props) => {
  const { unitType, type, tx, intl, stateData } = props
  const { customer, provider, listing } = tx
  const isOrder = type === 'order'

  const otherUser = isOrder ? provider : customer
  const otherUserDisplayName = otherUser.attributes ? <UserDisplayName user={otherUser} intl={intl} /> : null
  const isOtherUserBanned = otherUser.attributes.banned

  const isSaleNotification = !isOrder && txIsRequested(tx)
  const rowNotificationDot = isSaleNotification ? <div className={css.notificationDot} /> : null
  const lastTransitionedAt = formatDate(intl, tx.attributes.lastTransitionedAt)

  const linkClasses = classNames(css.itemLink, {
    [css.bannedUserLink]: isOtherUserBanned
  })

  const listingLink = listing ? createListingLink(listing, otherUser) : null

  return (
    <div className={css.item}>
      <div className={css.itemAvatar}>{isOrder && listing ? listingLink : <Avatar user={otherUser} />}</div>
      <NamedLink
        className={linkClasses}
        name={isOrder ? 'OrderDetailsPage' : 'SaleDetailsPage'}
        params={{ id: tx.id.uuid }}>
        <div className={css.rowNotificationDot}>{rowNotificationDot}</div>
        <div className={css.itemInfo}>
          <div className={classNames(css.itemUsername, stateData.nameClassName)}>{otherUserDisplayName}</div>
          <BookingInfoMaybe
            bookingClassName={stateData.bookingClassName}
            intl={intl}
            isOrder={isOrder}
            tx={tx}
            unitType={unitType}
          />
        </div>
        <div className={css.itemState}>
          <div className={classNames(css.stateName, stateData.stateClassName)}>{stateData.state}</div>
          <div
            className={classNames(css.lastTransitionedAt, stateData.lastTransitionedAtClassName)}
            title={lastTransitionedAt.long}>
            {lastTransitionedAt.short}
          </div>
        </div>
      </NamedLink>
    </div>
  )
}

InboxItem.propTypes = {
  unitType: propTypes.bookingUnitType.isRequired,
  type: oneOf(['order', 'sale']),
  tx: propTypes.transaction.isRequired,
  intl: intlShape.isRequired
}

export default InboxItem
