import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './GuidingPrincipals.module.css'

const GuidingPrincipals = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November 15, 2022</p>
      <p>At SkillPickr, our guiding principles serve as our commitment to continue working passionately toward:</p>
      <h3> Sincerity</h3>
      <p>Because without sincerity there is no credibility, trust or growth</p>
      <h3>Curiosity </h3>
      <p>
        Because curiosity is key! Things happen when we start to pay attention to what is happening with curiosity and
        as a bonus, curiosity is interrelated with inner motivation and innovation
      </p>
      <h3>Self-discipline</h3>
      <p>Because we want to succeed!</p>
      <h3>Respect</h3>
      <p>
        Because it is such a good starting point for all kinds of relationships. It is also a gift and when given or
        received, something good comes along
      </p>

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
