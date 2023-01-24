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

class EditVideographerFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const videographerKey = CheckboxFieldsType.videographerTypeKey
    const videographerOptions = findOptionsForSelectFilter(videographerKey, filterConfig)
    const ownStudioKey = DropdownFieldsType.ownStudioKey
    const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig)

    const soundLightExpKey = DropdownFieldsType.soundLightExpKey
    const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig)
    const interactiveExpKey = DropdownFieldsType.videoInteractiveKey
    const interactiveExpOptions = findOptionsForSelectFilter(interactiveExpKey, filterConfig)
    const editExpKey = DropdownFieldsType.editingServiceKey
    const editExpOptions = findOptionsForSelectFilter(editExpKey, filterConfig)
    const videoToPhotoServiceKey = DropdownFieldsType.videoToPhotoServiceKey
    const photoServiceOptions = findOptionsForSelectFilter(videoToPhotoServiceKey, filterConfig)

    const requiredCheckbox = 'You need to check a box'
    const videographerKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.videographerKeyMessage'
    })
    const videographerTitleKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.videographerTitle'
    })
    const ownStudioKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.ownStudioKeyMessage'
    })
    const interactiveKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.interactiveKeyMessage'
    })
    const editMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.editingServiceKeyMessage'
    })
    const photoServiceMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.videoToPhotoKeyMessage'
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
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.videographerTitle" />
          </h2>
          <FieldCheckboxGroup
            className={css.features}
            id={videographerKey}
            name={videographerKey}
            options={videographerOptions}
            label={videographerKeyMessage}
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
          <FieldSelect
            className={css.features}
            name={interactiveExpKey}
            id={interactiveExpKey}
            label={interactiveKeyMessage}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {interactiveExpOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect className={css.features} name={editExpKey} id={editExpKey} label={editMessage}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {editExpOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect
            className={css.features}
            name={videoToPhotoServiceKey}
            id={videoToPhotoServiceKey}
            label={photoServiceMessage}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {photoServiceOptions.map((o) => (
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
      </div>
    )
  }
}
EditVideographerFeaturesComponent.defaultProps = {
  filterConfig: custom.filters
}
EditVideographerFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditVideographerFeaturesComponent)
