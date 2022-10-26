import React from 'react'

import classNames from 'classnames'
import { string, bool, func } from 'prop-types'

import css from './ShowMoreLink.module.css'

const ShowMoreLink = (props) => {
  const { isExpanded, onClick, rootClassName, className } = props
  const classes = classNames(rootClassName || className, css.btnToggle)
  return (
    <a className={classes} onClick={onClick}>
      {isExpanded ? 'Show Less' : 'Show More'}
    </a>
  )
}
ShowMoreLink.defaultProps = {
  rootClassName: null,
  className: null,
  onClick: null,
  children: null
}

ShowMoreLink.propTypes = {
  rootClassName: string,
  className: string,
  onClick: func.isRequired,
  isExpanded: bool.isRequired
}

export default ShowMoreLink
