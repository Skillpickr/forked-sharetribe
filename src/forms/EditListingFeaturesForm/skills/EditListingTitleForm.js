import React, { Component } from 'react'
import { intlShape, injectIntl, FormattedMessage } from '../../../util/reactIntl'
import { FieldTextInput, Form } from '../../../components'

import css from '../EditListingFeaturesForm.module.css'
import { maxLength, required, composeValidators, validBusinessURL } from '../../../util/validators'

const TITLE_MAX_LENGTH = 60

class EditListingTitleForm extends Component {
  render() {
    const { intl } = this.props

    const titleMessage = intl.formatMessage({ id: 'EditListingDescriptionForm.title' })

    const titlePlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.titlePlaceholder'
    })
    const titleRequiredMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.titleRequired'
    })

    const maxLengthMessage = intl.formatMessage(
      { id: 'EditListingDescriptionForm.maxLength' },
      {
        maxLength: TITLE_MAX_LENGTH
      }
    )

    const descriptionMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.description'
    })
    const descriptionPlaceholderMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.descriptionPlaceholder'
    })
    const maxLength60Message = maxLength(maxLengthMessage, TITLE_MAX_LENGTH)

    const descriptionRequiredMessage = intl.formatMessage({
      id: 'EditListingDescriptionForm.descriptionRequired'
    })

    return (
      <div className={css.listingSectionContainer}>
        <h2>Tell the world all about your concept and why they’ll love it.</h2>
        <FieldTextInput
          id="title"
          name="title"
          className={css.title}
          type="text"
          label={titleMessage}
          placeholder={titlePlaceholderMessage}
          maxLength={TITLE_MAX_LENGTH}
          validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
        />

        <FieldTextInput
          id="description"
          name="description"
          className={css.description}
          type="textarea"
          label={descriptionMessage}
          placeholder={descriptionPlaceholderMessage}
          validate={composeValidators(required(descriptionRequiredMessage))}
        />
      </div>
    )
  }
}
EditListingTitleForm.defaultProps = {}
EditListingTitleForm.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(EditListingTitleForm)
