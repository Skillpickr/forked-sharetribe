import React, { useState, useEffect } from 'react'
import { ExternalLink } from '../../components'
import css from './InquirySwitcher.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import classNames from 'classnames'

const InquirySwitcher = () => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    const data = window.localStorage.getItem('SHOW_INQUIRY')

    if (data === null) {
      setTimeout(() => {
        setShowComponent(true)
        // window.localStorage.setItem('SHOW_INQUIRY', JSON.stringify(showComponent))
      }, 10 * 1000)
    } else {
      setShowComponent(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('SHOW_INQUIRY', JSON.stringify(showComponent))
  }, [showComponent])

  const classes = classNames(css.container, {
    [css.slideInLeft]: showComponent
  })

  return (
    <div className={classes}>
      {showComponent && (
        <div
          className={css.styleSwitcher}
          onClick={(e) => {
            e.preventDefault()
            setShowComponent(!showComponent)
          }}>
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
