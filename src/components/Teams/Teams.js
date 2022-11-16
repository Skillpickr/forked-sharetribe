import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './Teams.module.css'

const Teams = (props) => {
  const { rootClassName, className } = props
  const classes = classNames(rootClassName || css.root, className)

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: November 15, 2022</p>
      <p>
        <strong>Find and book available artistic creative souls near you. </strong>
      </p>
      <p>
        One place to brand, organize, keep track of jobs, payments and earn money for artistic people living a creative
        multidisciplinary life does not exist and for the customer, finding them is a time consuming and fragmented
        experience That is why Cæcilie, former PM and musician together with Allan, also former musician and UI
        specialist, launched SkillPickr in May 2022 with the mission to become a global online tooling marketplace and a
        community nurturing, inspiring and encouraging creative souls
      </p>
    </div>
  )
}

Teams.defaultProps = {
  rootClassName: null,
  className: null
}

const { string } = PropTypes

Teams.propTypes = {
  rootClassName: string,
  className: string
}

export default Teams
