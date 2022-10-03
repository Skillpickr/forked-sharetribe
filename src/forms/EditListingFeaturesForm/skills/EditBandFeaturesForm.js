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

class EditBandFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const bandTypeKey = DropdownFieldsType.musicianGroupKey
    const bandTypeOptions = findOptionsForSelectFilter(bandTypeKey, filterConfig)

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
        <FieldCheckboxGroup
          className={css.features}
          id={bandTypeKey}
          name={bandTypeKey}
          options={bandTypeOptions}
          label={'test'}
          validate={composeValidators(required(requiredCheckbox))}
        />
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
    )
  }
}
EditBandFeaturesComponent.defaultProps = {
  filterConfig: config.custom.filters
}
EditBandFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditBandFeaturesComponent)
