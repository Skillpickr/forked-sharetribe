import React, { useState } from 'react'
import { bool, node, string } from 'prop-types'
import classNames from 'classnames'
import routeConfiguration from '../../routeConfiguration'
import { findRouteByRouteName } from '../../util/routes'
import { IconSpinner, IconCheckmark } from '../../components'

import css from './Alert.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true)

  const renderElAlert = function () {
    return React.cloneElement(children)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setIsShow(false)
  }

  const handleIcon = (icon) => {
    switch (icon) {
      case 'error':
        return 'fa-solid fa-circle-exclamation'
      case 'warning':
        return 'fa-solid fa-triangle-exclamation'
      case 'success':
        return 'fa-solid fa-circle-check'
      case 'secondary':
        return 'fa-solid fa-comment'
      case 'primary':
        return 'fa-solid fa-circle-info'
      default:
        return 'fa-solid fa-info'
    }
  }

  return (
    <div className={classNames(css.alert, css[type], !isShow && css.hide)}>
      <div className={css.container}>
        {/* <FontAwesomeIcon icon={handleIcon(type)} className={classNames(css[type])} size="2x" /> */}
        {children ? renderElAlert() : <p>{message}</p>}
      </div>

      {/* <span className={css.closebtn} onClick={handleClose}>
        &times;
      </span> */}
    </div>
  )
}
