import React from 'react'
import { bool } from 'prop-types'
import { intlShape } from '../../util/reactIntl'
import classNames from 'classnames'
import { txIsEnquired } from '../../util/transaction'
import { propTypes, DATE_TYPE_DATETIME } from '../../util/types'
import { ensureListing } from '../../util/data'

import { BookingTimeInfo } from '../../components'

import css from './BookingInfoMaybe.module.css'
import { formatMoney } from '../../util/currency.js'
// Functional component as internal helper to print BookingTimeInfo if that is needed
const BookingInfoMaybe = (props) => {
  const { bookingClassName, isOrder, intl, tx, unitType } = props
  const isEnquiry = txIsEnquired(tx)

  if (isEnquiry) {
    return null
  }
  const listingAttributes = ensureListing(tx.listing).attributes
  const timeZone = listingAttributes.availabilityPlan ? listingAttributes.availabilityPlan.timezone : 'Etc/UTC'

  // If you want to show the booking price after the booking time on InboxPage you can
  // add the price after the BookingTimeInfo component. You can get the price by uncommenting
  // sthe following lines:

  const bookingPrice = isOrder ? tx.attributes.payinTotal : tx.attributes.payoutTotal
  const price = bookingPrice ? formatMoney(intl, bookingPrice) : null

  // Remember to also add formatMoney function from 'util/currency.js' and add this after BookingTimeInfo:

  return (
    <div className={classNames(css.bookingInfoWrapper, bookingClassName)}>
      <BookingTimeInfo
        bookingClassName={bookingClassName}
        isOrder={isOrder}
        intl={intl}
        tx={tx}
        unitType={unitType}
        dateType={DATE_TYPE_DATETIME}
        timeZone={timeZone}
      />
      <div className={css.itemPrice}>{price}</div>
    </div>
  )
}

BookingInfoMaybe.propTypes = {
  intl: intlShape.isRequired,
  isOrder: bool.isRequired,
  tx: propTypes.transaction.isRequired,
  unitType: propTypes.bookingUnitType.isRequired
}

export default BookingInfoMaybe
