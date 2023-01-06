import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './GuidingPrincipals.module.css'
import { FormattedMessage } from 'react-intl'

const GuidingPrincipals = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  // prettier-ignore
  return (
    <div className={classes}>
      <h1 className="title text-center">
        <FormattedMessage id="GuidingPrincipalsPage.heading" />
      </h1>
      {/* <p className={css.lastUpdated}>Last updated: November 15, 2022</p> */}
      <div className="text-muted para-desc mb0 mx-auto">

        <p><FormattedMessage id="GuidingPrincipals.text" /></p>
        <h2 className="mt4"> <FormattedMessage id="GuidingPrincipals.sincerity.title" /></h2>
        <p><FormattedMessage id="GuidingPrincipals.sincerity.text" /></p>
        <h2><FormattedMessage id="GuidingPrincipals.curiosity.title" /></h2>
        <p><FormattedMessage id="GuidingPrincipals.curiosity.text" />
        </p>
        <h2><FormattedMessage id="GuidingPrincipals.discipline.title" /></h2>
        <p><FormattedMessage id="GuidingPrincipals.discipline.text" /></p>
        <h2><FormattedMessage id="GuidingPrincipals.respect.title" /></h2>
        <p><FormattedMessage id="GuidingPrincipals.respect.text" />
        </p>
      </div>

    </div>
  )
}

GuidingPrincipals.defaultProps = {
  rootClassName: null,
  className: null
}

const { string } = PropTypes

GuidingPrincipals.propTypes = {
  rootClassName: string,
  className: string
}

export default GuidingPrincipals
