import React, { Component } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

import { FormattedMessage } from '../../util/reactIntl'
// import { lazyLoadWithDimensions } from '../../../util/contextHelpers'

import { NamedLink } from '../../components'

import css from './SectionBecome.module.css'

const SectionBecome = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  return (
    <div className={classes}>
      <div className={css.container}>
        <div className={css.columnLeft}>
          <h4 className={css.teaser}>Join the SkillPickr Community</h4>
          <h2 className={css.title}>Become a seller on SkillPickr</h2>
          <p className={css.text}>
            We are a huge marketplace dedicated to connecting great creative artists with all those who needs and want
            unique skills!
          </p>
        </div>
        <div className={css.columnRight}>
          <NamedLink name="SignupPage" className={classNames(css.becomeButton)}>
            <FormattedMessage id="SectionHero.browseButton" />
          </NamedLink>
        </div>
      </div>
    </div>
  )
}

SectionBecome.defaultProps = { rootClassName: null, className: null }

SectionBecome.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionBecome
