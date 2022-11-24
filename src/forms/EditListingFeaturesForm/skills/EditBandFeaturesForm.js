import React, { Component } from 'react'
import { intlShape, injectIntl } from '../../../util/reactIntl'
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

    const bandTypeKey = CheckboxFieldsType.bandTypeKey
    const bandTypeOptions = findOptionsForSelectFilter(bandTypeKey, filterConfig)
    const bandGenreKey = CheckboxFieldsType.bandGenreKey
    const bandGenreOptions = findOptionsForSelectFilter(bandGenreKey, filterConfig)

    const requiredCheckbox = 'You need to check a box'
    const requiredDropdown = 'You need to select a field'

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

    return (
      <div>
        <div className={css.listingSectionContainer}>
          <h2>Hey, you awesome band</h2>
          <FieldCheckboxGroup
            className={css.features}
            id={bandTypeKey}
            name={bandTypeKey}
            options={bandTypeOptions}
            label={'What type of events do you prefer?'}
            validate={composeValidators(required(requiredCheckbox))}
          />
          <FieldCheckboxGroup
            className={css.features}
            id={bandGenreKey}
            name={bandGenreKey}
            options={bandGenreOptions}
            label={'What type of genre do you play?'}
            validate={composeValidators(required(requiredCheckbox))}
          />
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
