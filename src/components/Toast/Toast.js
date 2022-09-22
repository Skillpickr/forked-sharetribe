import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './Toast.module.css'
import classNames from 'classnames'

class Toast extends Component {
  render() {
    setTimeout(() => {
      this.props.onDismissClick()
    }, 5000)
    return (
      <li
        className={classNames(css.notification, css.toast, css.bottom__left)}
        style={{ backgroundColor: this.props.color }}>
        <button className={''} onClick={this.props.onDismissClick}>
          x
        </button>
        <div>
          <p className={css.notification__title}>{this.props.title}</p>
          <p className={css.notification__message}>{this.props.text}</p>
        </div>
      </li>
    )
  }

  shouldComponentUpdate() {
    return false
  }
}

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Toast
