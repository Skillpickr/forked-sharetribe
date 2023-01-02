import React, { useState, useEffect } from 'react'
import { ExternalLink } from '../../components'

import css from './InquirySwitcher.module.css'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

const InquirySwitcher = () => {
  let switchElement = document.getElementById('style-switcher')
  const [showComponent, setShowComponent] = useState(false)

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

  const toggleSwitcher = () => {
    if (switchElement) {
      if (switchElement.style.left === '-189px') {
        switchElement.style.left = '0px'
      } else {
        switchElement.style.left = '-189px'
      }
    }
  }
  return (
    <div
      id="style-switcher"
      className={css.styleSwitcher}
      onClick={(e) => {
        e.preventDefault()
        toggleSwitcher()
      }}>
      {/* Style switcher  */}
      <div className={css.content}>
        {/* <h6 className="title text-center">
                    <FormattedMessage></FormattedMessage>
                    Kan du ikke finde hvad du leder efter. </h6>
                <ul className="pattern">
                    <li className="list-inline-item">
                        <a className="color1" onClick={(e) => {
                            e.preventDefault(); toggleSwitcher(false); document.getElementById('color-opt').href = 'css/colors/default.css'
                        }}></a>
                    </li>
                </ul> */}

        <h6 className="title">
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
          {/* <li className='d-grid'>
                        <ExternalLink key="linkToEmail" href="mailto:hello@skillpickr.com" title="Send en mail">Send en mail</ExternalLink>
                    </li> */}
        </ul>

        {/* <h6 className="title text-center pt-3 mb-0 border-top">Download</h6>
                <ul className="text-center list-unstyled mb-0">
                    <li><a href="https://1.envato.market/superex" target="_blank" className="btn btn-sm btn-block btn-warning mt-2 w-100">Download</a></li>
                </ul> */}
      </div>
      <div className="bottom">
        <a href="" className={classNames(css.settings, css.shadow)}>
          <FontAwesomeIcon icon="paper-plane" />
        </a>
      </div>
    </div>
  )
}

export default InquirySwitcher
