import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './Purpose.module.css'

const Purpose = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November 15, 2022</p>
      <h3>WHY</h3>
      <p>
        Simply because we love and believe in people whose attitudes and approaches to problems and challenges bear the
        mark of creativity - of courage, of talent, of innovative problem solving{' '}
      </p>

      <h3>HOW</h3>
      <p>
        By offering a large space for anyone to unleash their skills or passion and empower them to live a multi
        disciplinary creative life. By nurturing, inspiring and encouraging creative minds, help them find work with
        more ease and turn their skills into successful business. By making it easy for people to get in touch and book
        the skills of creative minds without speed bumps.
      </p>

      <h3>WHAT</h3>
      <p>
        Based on a global tooling marketplace we work to support people living a multidisciplinary creative life by
        building tools that optimize their productivity, processes and workflow. This we do to help all creatives evolve
        their skill and make their business thrive, regardless of what level they are on. The marketplace also reduces
        the friction between users, saving time and money finding the right match.
      </p>
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
