import React, { Component } from 'react'
import { intlShape, injectIntl, FormattedMessage } from '../../../util/reactIntl'
import { findOptionsForSelectFilter } from '../../../util/search'
import { propTypes } from '../../../util/types'
import config from '../../../config'
import * as custom from '../../../marketplace-custom-config.js'

import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Alert } from '../../../components'
import { compose } from 'redux'
import css from '../EditListingFeaturesForm.module.css'
import { CheckboxFieldsType, DropdownFieldsType } from '../../../util/featuresFields'
import { required, composeValidators } from '../../../util/validators'
import EditListingTitleForm from './EditListingTitleForm'

class EditBandFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props
    const requiredCheckbox = intl.formatMessage({
      id: 'EditListingFeaturesForm.requiredCheckbox'
    })
    const requiredDropdown = intl.formatMessage({
      id: 'EditListingFeaturesForm.requiredDropdown'
    })

    const bandTypeKey = CheckboxFieldsType.bandTypeKey
    const bandTypeOptions = findOptionsForSelectFilter(bandTypeKey, filterConfig)
    const bandTypeKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.bandTypeKeyMessage'
    })

    const bandGenreKey = CheckboxFieldsType.bandGenreKey
    const bandGenreOptions = findOptionsForSelectFilter(bandGenreKey, filterConfig)
    const bandGenreKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.bandGenreKeyMessage'
    })

    const technicalRiderMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.technicalRiderMessage'
    })
    const technicalRiderPlaceholderMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.technicalRiderPlaceholderMessage'
    })

    const cateringRiderMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.cateringRiderMessage'
    })
    const cateringRiderPlaceholderMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.cateringRiderPlaceholderMessage'
    })

    const constellationKey = DropdownFieldsType.constellationKey
    const constellationOptions = findOptionsForSelectFilter(constellationKey, filterConfig)
    const constellationMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.constellationKeyMessage'
    })

    return (
      <div>
        <div className={css.listingSectionContainer}>
          <h2>
            <FormattedMessage id="EditListingFeaturesForm.bandTitle" />
          </h2>
          <FieldCheckboxGroup
            className={css.features}
            id={bandTypeKey}
            name={bandTypeKey}
            options={bandTypeOptions}
            label={bandTypeKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
          />
          <FieldCheckboxGroup
            className={css.features}
            id={bandGenreKey}
            name={bandGenreKey}
            options={bandGenreOptions}
            label={bandGenreKeyMessage}
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
          <FieldTextInput
            id="technicalRider"
            name="technicalRider"
            className={css.features}
            type="textarea"
            label={technicalRiderMessage}
            placeholder={technicalRiderPlaceholderMessage}
          />
          <FieldTextInput
            id="cateringRider"
            name="cateringRider"
            className={css.features}
            type="textarea"
            label={cateringRiderMessage}
            placeholder={cateringRiderPlaceholderMessage}
          />
        </div>
        {/* <EditListingOtherInfoForm></EditListingOtherInfoForm> */}
      </div>
    )
  }
}
EditBandFeaturesComponent.defaultProps = {
  filterConfig: custom.filters
}
EditBandFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditBandFeaturesComponent)
