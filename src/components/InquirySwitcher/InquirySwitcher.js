import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink } from '../../components'

import css from './InquirySwitcher.module.css'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

const InquirySwitcher = () => {
  const [showComponent, setShowComponent] = useState(true)

  useEffect(() => {
    const data = window.localStorage.getItem('SHOW_INQUIRY')
    if (data !== null) setShowComponent(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('SHOW_INQUIRY', JSON.stringify(showComponent))
  }, [showComponent])

  const switcherStyle = {
    left: showComponent
  }

  return (
    <div className={css.container}>
      {showComponent && (
        <div
          className={css.styleSwitcher}
          onClick={(e) => {
            e.preventDefault()
            setShowComponent(!showComponent)
          }}
          style={switcherStyle}>
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
        </div>
      )}
      <div>
        <a
          href=""
          className={classNames(css.settings, css.shadow)}
          onClick={(e) => {
            e.preventDefault()
            setShowComponent(!showComponent)
          }}>
          <FontAwesomeIcon icon="paper-plane" />
        </a>
      </div>
    </div>
  )
}

export default InquirySwitcher
