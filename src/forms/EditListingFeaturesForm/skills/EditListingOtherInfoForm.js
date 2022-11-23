import React, { Component } from 'react'
import { intlShape, injectIntl, FormattedMessage } from '../../../util/reactIntl'
import { FieldTextInput, Form } from '../../../components'

import css from '../EditListingFeaturesForm.module.css'
import { maxLength, required, composeValidators, validBusinessURL } from '../../../util/validators'

const TITLE_MAX_LENGTH = 60

class EditListingOtherInfoForm extends Component {
  render() {
    const { intl } = this.props

    const exprienceMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.experience'
    })
    const experiencePlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.experiencePlaceholder'
    })
    const experienceRequiredMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.experienceRequired'
    })

    const trackMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.track'
    })
    const trackPlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.trackPlaceholder'
    })
    const trackRequiredMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.trackRequired'
    })

    const urlMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.url'
    })
    const urlPlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.urlPlaceholder'
    })
    const urlRequiredMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.urlRequired'
    })

    const bonusMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.bonus'
    })
    const bonusPlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.bonusPlaceholder'
    })

    const urlValidateMessage = validBusinessURL(
      intl.formatMessage({ id: 'EditListingDescriptionForm.businessURLRequired' })
    )

    return (
      <div>
        <h2>
          <FormattedMessage id="EditListingDescriptionForm.greeting" />
          
        </h2>
        <FieldTextInput
          id="experience"
          name="experience"
          className={css.description}
          type="number"
          label={exprienceMessage}
          placeholder={experiencePlaceholderMessage}
          validate={composeValidators(required(experienceRequiredMessage))}
        />
        <FieldTextInput
          id="track"
          name="track"
          className={css.description}
          type="textarea"
          label={trackMessage}
          placeholder={trackPlaceholderMessage}
          validate={composeValidators(required(trackRequiredMessage))}
        />
        <FieldTextInput
          id="url"
          name="url"
          className={css.description}
          type="text"
          label={urlMessage}
          placeholder={urlPlaceholderMessage}
          validate={urlValidateMessage}
        />
        <FieldTextInput
          id="bonus"
          name="bonus"
          className={css.description}
          type="textarea"
          label={bonusMessage}
          placeholder={bonusPlaceholderMessage}
        />
      </div>
    )
  }
}
EditListingOtherInfoForm.defaultProps = {}
EditListingOtherInfoForm.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(EditListingOtherInfoForm)
