import React, { useState, Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Form as FinalForm } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { intlShape, injectIntl, FormattedMessage } from '../../../util/reactIntl'
import { findOptionsForSelectFilter } from '../../../util/search'
import { propTypes } from '../../../util/types'
import config from '../../../config'
import * as custom from '../../../marketplace-custom-config.js'

import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../../components'
import { compose } from 'redux'
import css from '../EditListingFeaturesForm.module.css'
import { Skills, Categories } from '../../../util/category'
import { CheckboxFieldsType, DropdownFieldsType } from '../../../util/featuresFields'
import { required, composeValidators } from '../../../util/validators'
import EditListingTitleForm from './EditListingTitleForm'

class EditPhotographerFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const photographerKey = CheckboxFieldsType.photographerTypeKey
    const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig)
    const ownStudioKey = DropdownFieldsType.ownStudioKey
    const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig)

    const soundLightExpKey = DropdownFieldsType.soundLightExpKey
    const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig)
    const editingServiceKey = DropdownFieldsType.editingServiceKey
    const editingServiceOptions = findOptionsForSelectFilter(editingServiceKey, filterConfig)

    const requiredCheckbox = intl.formatMessage({
      id: 'EditListingFeaturesForm.requiredCheckbox'
    })
    const photographerKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.photographerKeyMessage'
    })
    const ownStudioKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.ownStudioKeyMessage'
    })
    const editingServiceKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.editingServiceKeyMessage'
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

    const soundLightExpLabelTooltip = intl.formatMessage({
      id: 'EditListingFeaturesForm.soundLightExpKeyTooltip'
    })
    return (
      <div>
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.photographerTitle" />
          </h2>
          <FieldCheckboxGroup
            className={css.features}
            id={photographerKey}
            name={photographerKey}
            options={photographerOptions}
            label={photographerKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
          />
        </div>
        <EditListingTitleForm></EditListingTitleForm>
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.practicalInfo.greeting" />
          </h2>
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
          {/* <FieldSelect
            className={css.features}
            name={editingServiceKey}
            id={editingServiceKey}
            label={editingServiceKeyMessage}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {editingServiceOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect> */}
          <FieldTextInput
            id="gear"
            name="gear"
            className={css.features}
            type="textarea"
            label={gearMessage}
            placeholder={gearMessagePlaceholder}
          />
        </div>
      </div>
    )
  }
}
EditPhotographerFeaturesComponent.defaultProps = {
  filterConfig: custom.filters
}
EditPhotographerFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditPhotographerFeaturesComponent)
