// import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Toast from './Toast'
import { removeToast } from '../../ducks/toasts.duck'
import css from './Toast.module.css'
import classNames from 'classnames'

const Toasts = ({ actions, toasts }) => {
  const { removeToast } = actions

  return (
    <ul className={classNames(css.notification__container, css.bottom__left)}>
      {toasts.map((toast) => {
        const { id } = toast
        return <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
      })}
    </ul>
  )
}

Toasts.propTypes = {
  actions: PropTypes.shape({
    removeToast: PropTypes.func.isRequired
  }).isRequired,
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ removeToast }, dispatch)
})

const mapStateToProps = (state) => ({
  toasts: state.toasts
})

export default connect(mapStateToProps, mapDispatchToProps)(Toasts)
