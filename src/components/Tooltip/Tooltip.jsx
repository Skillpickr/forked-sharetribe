import React, { useState } from 'react'
import './Tooltip.css'
import { InlineTextButton } from '../Button/Button'

/**
 * Find the matching routes and their params for the given pathname
 *
 * @param {Number} delay
 *
 * @param {Node} children
 */
const Tooltip = (props) => {
  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, props.delay || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  const toggleTip = () => {
    active ? hideTip() : showTip()
  }

  return (
    <InlineTextButton
      type="button"
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onClick={toggleTip}>
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </InlineTextButton>
  )
}

export default Tooltip
