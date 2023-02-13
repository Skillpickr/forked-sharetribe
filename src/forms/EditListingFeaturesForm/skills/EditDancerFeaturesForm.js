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

class EditDancerFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props
    const requiredDropdown = intl.formatMessage({
      id: 'EditListingFeaturesForm.requiredDropdown'
    })
    const requiredCheckbox = intl.formatMessage({
      id: 'EditListingFeaturesForm.requiredCheckbox'
    })

    const dancerKey = CheckboxFieldsType.dancerTypeKey
    const dancerOptions = findOptionsForSelectFilter(dancerKey, filterConfig)
    const dancerKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.dancerKeyMessage'
    })

    const ownStudioKey = DropdownFieldsType.ownStudioKey
    const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig)
    const ownStudioKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.ownStudioKeyMessage'
    })

    const constellationKey = DropdownFieldsType.constellationKey
    const constellationOptions = findOptionsForSelectFilter(constellationKey, filterConfig)
    const constellationMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.constellationKeyMessage'
    })

    const gearMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.gear'
    })
    const gearMessagePlaceholder = intl.formatMessage({
      id: 'EditListingFeaturesForm.gearMessagePlaceholder'
    })

    return (
      <div>
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.dancerTitle" />
          </h2>
          <FieldCheckboxGroup
            className={css.features}
            id={dancerKey}
            name={dancerKey}
            options={dancerOptions}
            label={dancerKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
          />

          <FieldSelect
            className={css.features}
            name={constellationKey}
            id={constellationKey}
            label={constellationMessage}
            validate={composeValidators(required(requiredDropdown))}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {constellationOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
        </div>
        <EditListingTitleForm></EditListingTitleForm>
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.practicalInfo.greeting" />
          </h2>
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
      </div>
    )
  }
}
EditDancerFeaturesComponent.defaultProps = {
  filterConfig: custom.filters
}
EditDancerFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditDancerFeaturesComponent)
