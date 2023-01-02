import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// External link that opens in a new tab/window, ensuring that the
// opened page doesn't have access to the current page.
//
// See: https://mathiasbynens.github.io/rel-noopener/
const ExternalLink = (props) => {
  const { children, ...rest } = props
  const spanStyle = {
    marginLeft: '8px',
  };
  return (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
      <span style={spanStyle}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
      </span>
    </a>
  )
}

ExternalLink.defaultProps = { children: null }

const { node } = PropTypes

ExternalLink.propTypes = { children: node }

export default ExternalLink
