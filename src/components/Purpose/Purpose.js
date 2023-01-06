import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './Purpose.module.css'
import { FormattedMessage } from 'react-intl'

const Purpose = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  // prettier-ignore
  return (
    <div className={classes}>
      {/* <p className={css.lastUpdated}>Last updated: November 15, 2022</p> */}
      <h1 className="title text-center">
        <FormattedMessage id="PurposePage.heading" />
      </h1>
      <div className="text-muted para-desc mb0 mx-auto">
        <h3><FormattedMessage id="Purpose.why.title" /></h3>
        <p>
          <FormattedMessage id="Purpose.why.text" />     </p>

        <h3><FormattedMessage id="Purpose.how.title" /></h3>
        <p>
          <FormattedMessage id="Purpose.how.text" />      </p>

        <h3><FormattedMessage id="Purpose.what.title" /></h3>
        <p>
          <FormattedMessage id="Purpose.what.text" />      </p>
      </div>
    </div>
  )
}

Purpose.defaultProps = {
  rootClassName: null,
  className: null
}

const { string } = PropTypes

Purpose.propTypes = {
  rootClassName: string,
  className: string
}

export default Purpose
