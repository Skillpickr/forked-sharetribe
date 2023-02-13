/*
 * Renders a group of checkboxes that can be used to select
 * multiple values from a set of options.
 *
 * The corresponding component when rendering the selected
 * values is PropertyGroup.
 *
 */

import React, { useState } from 'react'
import { arrayOf, bool, node, shape, string } from 'prop-types'
import classNames from 'classnames'
import { FieldArray } from 'react-final-form-arrays'
import { FieldCheckbox, ValidationError } from '../../components'
import { ShowMoreLink } from '../../components'

import css from './FieldCheckboxGroup.module.css'

const FieldCheckboxRenderer = (props) => {
  const { className, rootClassName, label, twoColumns, id, fields, options, meta } = props
  const [showMore, setShowMore] = useState(false)

  const classes = classNames(rootClassName || css.root, className)
  const listClasses = twoColumns ? classNames(css.list, css.twoColumns) : css.list

  const optionsSorted = [...options].sort((a, b) => (a.label > b.label ? 1 : -1))
  const optionsForDisplay = showMore ? optionsSorted : optionsSorted.slice(0, 10)

  let showClasses
  if (options.length >= 10) {
    showClasses = classNames(showMore ? css.expanded : css.collapsed)
  }

  return (
    <div className={css.root}>
      <div>
        <fieldset className={classes}>
          {label ? <legend>{label}</legend> : null}
          <ul className={classNames(listClasses, showClasses)}>
            {optionsForDisplay.map((option, index) => {
              const fieldId = `${id}.${option.key}`
              return (
                <li key={fieldId} className={css.item}>
                  <FieldCheckbox id={fieldId} name={fields.name} label={option.label} value={option.key} />
                </li>
              )
            })}
          </ul>
          <ValidationError fieldMeta={{ ...meta }} />
          {options.length >= 10 && <ShowMoreLink isExpanded={showMore} onClick={() => setShowMore(!showMore)} />}
        </fieldset>
      </div>
    </div>
  )
}

FieldCheckboxRenderer.defaultProps = {
  rootClassName: null,
  className: null,
  label: null,
  twoColumns: false
}

FieldCheckboxRenderer.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  label: node,
  options: arrayOf(
    shape({
      key: string.isRequired,
      label: node.isRequired
    })
  ).isRequired,
  twoColumns: bool
}

const FieldCheckboxGroup = (props) => <FieldArray component={FieldCheckboxRenderer} {...props} />

// Name and component are required fields for FieldArray.
// Component-prop we define in this file, name needs to be passed in
FieldCheckboxGroup.propTypes = {
  name: string.isRequired
}

export default FieldCheckboxGroup
