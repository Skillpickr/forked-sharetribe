import PropTypes from 'prop-types'
import React, { Component } from 'react'
import css from './Toast.module.css'

class Toast extends Component {
  
  render() {
    return (
      <li className={css.toast} style={{ backgroundColor: this.props.color }}>
        <p className={css.toast__content}>{this.props.text}</p>
        <button className={css.toast__dismiss} onClick={this.props.onDismissClick}>
          x
        </button>
      </li>
    )
  }

  shouldComponentUpdate() {
    return false
  }
}

Toast.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Toast
