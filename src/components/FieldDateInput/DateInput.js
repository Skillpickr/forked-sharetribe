/**
 * DateInput wraps SingleDatePicker from React-dates and gives a list of all default props we use.
 * Styles for SingleDatePicker can be found from 'public/reactDates.css'.
 *
 * N.B. *isOutsideRange* in defaultProps is defining what dates are available to booking.
 */
import React, { Component } from 'react'
import { bool, func, instanceOf, shape, string } from 'prop-types'
import { SingleDatePicker, isInclusivelyAfterDay, isInclusivelyBeforeDay } from 'react-dates'

// Import moment from moment-timezone. 10-year range only.
// The full data included in moment-timezone dependency is mostly irrelevant
// and slows down the first paint.
import moment from 'moment-timezone/builds/moment-timezone-with-data-10-year-range.min'

import classNames from 'classnames'
import config from '../../config'

import { intlShape, injectIntl } from '../../util/reactIntl'

import NextMonthIcon from './NextMonthIcon'
import PreviousMonthIcon from './PreviousMonthIcon'
import css from './DateInput.module.css'

export const HORIZONTAL_ORIENTATION = 'horizontal'
export const ANCHOR_LEFT = 'left'

// Possible configuration options of React-dates
const defaultProps = {
  initialDate: null, // Possible initial date passed for the component
  value: null, // Value should keep track of selected date.

  // input related props
  id: 'dateInput',
  placeholder: null, // Handled inside component
  disabled: false,
  required: false,
  readOnly: false,
  screenReaderInputMessage: null, // Handled inside component
  showClearDate: false,
  customCloseIcon: null,
  showDefaultInputIcon: false,
  customInputIcon: null,
  noBorder: true,
  block: false,
  small: false,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: HORIZONTAL_ORIENTATION,
  anchorDirection: ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  appendToBody: false,
  disableScroll: false,
  initialVisibleMonth: null,
  firstDayOfWeek: config.i18n.firstDayOfWeek,
  numberOfMonths: 1,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDate: false,
  renderCalendarInfo: null,
  hideKeyboardShortcutsPanel: true,
  daySize: 38,
  isRTL: false,

  // navigation related props
  navPrev: <PreviousMonthIcon />,
  navNext: <NextMonthIcon />,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},
  transitionDuration: 200, // milliseconds between next month changes etc.

  // day presentation and interaction related props
  renderCalendarDay: undefined, // If undefined, renders react-dates/lib/components/CalendarDay
  // day presentation and interaction related props
  renderDayContents: (day) => {
    return <span className="renderedDay">{day.format('D')}</span>
  },
  enableOutsideDays: false,
  isDayBlocked: () => false,

  // outside range -><- today ... today+available days -1 -><- outside range
  isOutsideRange: (day) => {
    const endOfRange = config.dayCountAvailableForBooking - 1
    return !isInclusivelyAfterDay(day, moment()) || !isInclusivelyBeforeDay(day, moment().add(endOfRange, 'days'))
  },
  isDayHighlighted: () => {},

  // Internationalization props
  // Multilocale support can be achieved with displayFormat like moment.localeData.longDateFormat('L')
  // https://momentjs.com/
  displayFormat: 'ddd, MMM D',
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: {
    closeDatePicker: null, // Handled inside component
    clearDate: null // Handled inside component
  }
}

class DateInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }

    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDateChange(date) {
    const selectedDate = moment && moment.isMoment(date) ? date.toDate() : null
    this.props.onChange({ date: selectedDate })
  }

  onFocusChange(values) {
    const focused = values.focused
    // SingleDatePicker requires 'onFocusChange' function and 'focused' boolean
    // but Fields of React-Form deals with onFocus & onBlur instead
    this.setState({ focused })

    if (focused) {
      this.props.onFocus()
    } else {
      this.props.onBlur()
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      initialDate,
      intl,
      name,
      placeholderText,
      onBlur,
      onChange,
      onFocus,
      phrases,
      screenReaderInputMessage,
      useMobileMargins,
      value,
      children,
      render,
      ...datePickerProps
    } = this.props
    /* eslint-enable no-unused-vars */

    const initialMoment = initialDate ? moment(initialDate) : null

    const date =
      value && value.date instanceof Date && value.date.toString() !== 'Invalid Date'
        ? moment(value.date)
        : initialMoment

    const placeholder = placeholderText || intl.formatMessage({ id: 'FieldDateInput.placeholder' })

    const screenReaderInputText =
      screenReaderInputMessage || intl.formatMessage({ id: 'FieldDateInput.screenReaderInputMessage' })

    const closeDatePickerText = phrases.closeDatePicker
      ? phrases.closeDatePicker
      : intl.formatMessage({ id: 'FieldDateInput.closeDatePicker' })

    const clearDateText = phrases.clearDate ? phrases.clearDate : intl.formatMessage({ id: 'FieldDateInput.clearDate' })

    const classes = classNames(css.inputRoot, className, {
      [css.withMobileMargins]: useMobileMargins
    })

    return (
      <div className={classes}>
        <SingleDatePicker
          {...datePickerProps}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          date={date}
          onDateChange={this.onDateChange}
          placeholder={placeholder}
          screenReaderInputMessage={screenReaderInputText}
          phrases={{ closeDatePicker: closeDatePickerText, clearDate: clearDateText }}
        />
      </div>
    )
  }
}

DateInputComponent.defaultProps = {
  className: null,
  useMobileMargins: false,
  ...defaultProps
}

DateInputComponent.propTypes = {
  className: string,
  id: string,
  focused: bool,
  initialDate: instanceOf(Date),
  intl: intlShape.isRequired,
  name: string.isRequired,

  onChange: func.isRequired,
  onBlur: func.isRequired,
  onFocus: func.isRequired,
  isDayBlocked: func,
  phrases: shape({
    closeDatePicker: string,
    clearDate: string
  }),
  useMobileMargins: bool,
  placeholderText: string,
  screenReaderInputMessage: string,
  value: shape({
    date: instanceOf(Date)
  })
}

export default injectIntl(DateInputComponent)
