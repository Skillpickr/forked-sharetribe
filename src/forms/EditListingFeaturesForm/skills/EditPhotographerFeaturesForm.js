import React, { useState, Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Form as FinalForm } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { intlShape, injectIntl, FormattedMessage } from '../../../util/reactIntl'
import { findOptionsForSelectFilter } from '../../../util/search'
import { propTypes } from '../../../util/types'
import config from '../../../config'
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../../components'
import { compose } from 'redux'
import css from '../EditListingFeaturesForm.module.css'
import { Skills, Categories } from '../../../util/category'
import { CheckboxFieldsType, DropdownFieldsType } from '../../../util/featuresFields'
import { required, composeValidators } from '../../../util/validators'

class EditPhotographerFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const photographerKey = CheckboxFieldsType.photographerTypeKey
    const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig)
    const ownStudioKey = DropdownFieldsType.ownStudioKey
    const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig)

    const soundLightExpKey = DropdownFieldsType.soundLightExpKey
    const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig)
    const requiredCheckbox = 'You need to check a box'
    const photographerKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.photographerKeyMessage'
    })
    const ownStudioKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.ownStudioKeyMessage'
    })
    const gearMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.gear'
    })
    const gearMessagePlaceholder = intl.formatMessage({
      id: 'EditListingFeaturesForm.gearMessagePlaceholder'
    })

    const soundLightExpKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.soundLightExpKeyMessage'
    })
    return (
      <div>
        <h2>Hello you gifted Photographer</h2>
        <FieldCheckboxGroup
          className={css.features}
          id={photographerKey}
          name={photographerKey}
          options={photographerOptions}
          label={photographerKeyMessage}
          validate={composeValidators(required(requiredCheckbox))}
        />
        <FieldSelect
          className={css.features}
          name={soundLightExpKey}
          id={soundLightExpKey}
          label={soundLightExpKeyMessage}>
          <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
            {(id) => (
              <option disabled value="">
                {id}
              </option>
            )}
          </FormattedMessage>
          {soundLightExpOptions.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </FieldSelect>
        <FieldSelect className={css.features} name={ownStudioKey} id={ownStudioKey} label={ownStudioKeyMessage}>
          <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
            {(id) => (
              <option disabled value="">
                {id}
              </option>
            )}
          </FormattedMessage>
          {ownStudioOptions.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </FieldSelect>
        <FieldTextInput
          id="gear"
          name="gear"
          className={css.features}
          type="textarea"
          label={gearMessage}
          placeholder={gearMessagePlaceholder}
        />
      </div>
    )
  }
}
EditPhotographerFeaturesComponent.defaultProps = {
  filterConfig: config.custom.filters
}
EditPhotographerFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditPhotographerFeaturesComponent)
