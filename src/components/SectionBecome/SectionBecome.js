import React, { Component } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import { propTypes } from '../../util/types'

import { FormattedMessage } from '../../util/reactIntl'
// import { lazyLoadWithDimensions } from '../../../util/contextHelpers'

import { NamedLink } from '../../components'

import css from './SectionBecome.module.css'

const SectionBecome = (props) => {
  const { rootClassName, className, currentUser } = props
  const classes = classNames(rootClassName || css.root, className)
  const signupButton = currentUser ? (
    <NamedLink name="NewListingPage" className={classNames(css.becomeButton)}>
      <FormattedMessage id="SectionBecome.listingButton" />
    </NamedLink>
  ) : (
    <NamedLink name="SignupPage" className={classNames(css.becomeButton)}>
      <FormattedMessage id="SectionBecome.profileButton" />
    </NamedLink>
  )
  return (
    <div className={classes}>
      <div className={css.container}>
        <div className={css.columnLeft}>
          <h4 className={css.teaser}>
            <FormattedMessage id="SectionBecome.teaser" />
          </h4>
          <h2 className={css.title}>
            <FormattedMessage id="SectionBecome.heading" />
          </h2>
          <p className={css.text}>
            <FormattedMessage id="SectionBecome.content" />
          </p>
        </div>
        <div className={css.columnRight}>{signupButton}</div>
      </div>
    </div>
  )
}

SectionBecome.defaultProps = { rootClassName: null, className: null, currentUser: null }

SectionBecome.propTypes = {
  rootClassName: string,
  className: string,
  currentUser: propTypes.currentUser
}

export default SectionBecome
