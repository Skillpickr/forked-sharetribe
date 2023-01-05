import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink } from '../../components'

import css from './InquirySwitcher.module.css'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

const InquirySwitcher = () => {
  const switchEl = useRef(null)
  const [showComponent, setShowComponent] = useState(true)

  useEffect(() => {
    const toRef = setTimeout(() => {
      setShowComponent(true)
      toggleSwitcher(true)
      clearTimeout(toRef)
      // it is good practice to clear the timeout (but I am not sure why)
    }, 100000)
  })

  useEffect(() => {
    if (showComponent) {
      const toRef = setTimeout(() => {
        setShowComponent(false)
        clearTimeout(toRef)
      }, 10000)
    }
  }, [showComponent])

  const switcherStyle = {
    left: '-189px'
  }

  const toggleSwitcher = (e) => {
    if (switchEl) {
      if (switchEl.current.style.left === '-189px') {
        switchEl.current.style.left = '0px'
      } else {
        switchEl.current.style.left = '-189px'
      }
    }
  }

  return (
    <div
      ref={switchEl}
      className={css.styleSwitcher}
      onClick={(e) => {
        e.preventDefault()
        toggleSwitcher()
      }}
      style={switcherStyle}>
      {/* Style switcher  */}
      <div>
        <h6>
          <FormattedMessage id="InquirySwitcher.message" values={{ breakline: <br /> }} />
        </h6>
        <ul>
          <li>
            <ExternalLink
              onClick={(e) => {
                e.preventDefault()
              }}
              key="linkToEmail"
              href="mailto:hello@skillpickr.com"
              title="Send en mail">
              <FormattedMessage id="InquirySwitcher.button" />
            </ExternalLink>
          </li>
        </ul>
      </div>
      <div>
        <a href="" className={classNames(css.settings, css.shadow)}>
          <FontAwesomeIcon icon="paper-plane" />
        </a>
      </div>
    </div>
  )
}

export default InquirySwitcher
