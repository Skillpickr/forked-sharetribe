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

class EditDJFeaturesComponent extends Component {
  render() {
    const { filterConfig, intl } = this.props

    const djKey = CheckboxFieldsType.djTypeKey
    const djOptions = findOptionsForSelectFilter(djKey, filterConfig)
    const djGearForPlayingKey = DropdownFieldsType.djGearForPlayingKey
    const djGearForPlayingOptions = findOptionsForSelectFilter(djGearForPlayingKey, filterConfig)
    const songRequestKey = DropdownFieldsType.songRequestKey
    const songRequestOptions = findOptionsForSelectFilter(songRequestKey, filterConfig)
    const requiredCheckbox = 'You need to check a box'
    const djKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.djKeyMessage'
    })

    const djGearForPlayingKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.djGearForPlayingKeyMessage'
    })

    const playingStyleMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.playingStyleMessage'
    })
    const playingStylePlaceholderMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.playingStylePlaceholderMessage'
    })
    const songRequestKeyMessage = intl.formatMessage({
      id: 'EditListingFeaturesForm.songRequestKeyMessage'
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
        <h2>Hello you talented DJ</h2>
        <FieldCheckboxGroup
          className={css.features}
          id={djKey}
          name={djKey}
          options={djOptions}
          label={djKeyMessage}
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
        <FieldSelect
          className={css.features}
          name={djGearForPlayingKey}
          id={djGearForPlayingKey}
          label={djGearForPlayingKeyMessage}>
          <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
            {(id) => (
              <option disabled value="">
                {id}
              </option>
            )}
          </FormattedMessage>
          {djGearForPlayingOptions.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </FieldSelect>
        <FieldTextInput
          id="playingStyle"
          name="playingStyle"
          className={css.features}
          type="textarea"
          label={playingStyleMessage}
          placeholder={playingStylePlaceholderMessage}
        />
        <FieldSelect className={css.features} name={songRequestKey} id={songRequestKey} label={songRequestKeyMessage}>
          <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
            {(id) => (
              <option disabled value="">
                {id}
              </option>
            )}
          </FormattedMessage>
          {songRequestOptions.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </FieldSelect>
      </div>
    )
  }
}
EditDJFeaturesComponent.defaultProps = {
  filterConfig: config.custom.filters
}
EditDJFeaturesComponent.propTypes = {
  filterConfig: propTypes.filterConfig,
  intl: intlShape.isRequired
}

export default injectIntl(EditDJFeaturesComponent)
