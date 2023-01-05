/**
 * MenuLabel is the only always visible part of Menu.
 * Clicking it toggles visibility of MenuContent.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './InputLabel.module.css'
// import Tooltip from '../Tooltip/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'

class InputLabel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, className, rootClassName, id, tooltip, tooltipString } = this.props
    const rootClass = rootClassName || css.root
    const classes = classNames(rootClass, className, {})
    return (
      <div>
        <label className={classes} htmlFor={id}>
          {text}
        </label>
        {tooltip && (
          <div className={css.icon}>
            <FontAwesomeIcon data-tip data-for={'input-label-tooltip' + id} icon={['fas', 'fa-circle-question']} />
            <ReactTooltip id={'input-label-tooltip' + id} type="light" effect="solid">
              <p className={css.container}>{tooltipString}</p>
            </ReactTooltip>
          </div>
        )}
      </div>
    )
  }
}

InputLabel.defaultProps = {
  className: null,
  rootClassName: '',
  id: '',
  tooltip: false,
  tooltipString: ''
}

const { bool, func, node, string } = PropTypes

InputLabel.propTypes = {
  text: string.isRequired,
  className: string,
  rootClassName: string,
  id: string.isRequired,
  tooltip: bool,
  tooltipString: string
}

export default InputLabel
