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

class EditMusicianFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const musicSoloistKey = DropdownFieldsType.musicianSoloKey
    const musicSoloistOptions = findOptionsForSelectFilter(musicSoloistKey, filterConfig)
    const musicianTypeKey = CheckboxFieldsType.musicianTypeKey
    const musicianTypeOptions = findOptionsForSelectFilter(musicianTypeKey, filterConfig)
    const musicalGenreKey = CheckboxFieldsType.musicalGenre
    const musicalGenreOptions = findOptionsForSelectFilter(musicalGenreKey, filterConfig)

    const requiredCheckbox = 'You need to check a box'
    const requiredDropdown = 'You need to select a field'

    const musicSoloistKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.musicSoloistKeyMessage'
    })

    const musicianTypeKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.musicianTypeKeyMessage'
    })

    const musicalGenreKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.musicalGenreKeyMessage'
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

    return (
      <div>
        <h2>Hello you musical genius</h2>
        <FieldSelect
          className={css.features}
          name={musicSoloistKey}
          id={musicSoloistKey}
          label={musicSoloistKeyMessage}
          validate={required(requiredDropdown)}>
          <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
            {(id) => (
              <option disabled value="">
                {id}
              </option>
            )}
          </FormattedMessage>
          {musicSoloistOptions.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </FieldSelect>
        <FieldCheckboxGroup
          className={css.features}
          id={musicianTypeKey}
          name={musicianTypeKey}
          options={musicianTypeOptions}
          label={musicianTypeKeyMessage}
          validate={composeValidators(required(requiredCheckbox))}
        />
        <FieldCheckboxGroup
          className={css.features}
          id={musicalGenreKey}
          name={musicalGenreKey}
          options={musicalGenreOptions}
          label={musicalGenreKeyMessage}
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
EditMusicianFeaturesComponent.defaultProps = {
  filterConfig: config.custom.filters
}
EditMusicianFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditMusicianFeaturesComponent)
