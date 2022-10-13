import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import { compose } from 'redux'
import { Form as FinalForm } from 'react-final-form'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { propTypes } from '../../util/types'
import { maxLength, required, composeValidators, validBusinessURL } from '../../util/validators'
import { Form, Button, FieldTextInput } from '../../components'

import css from './EditListingDescriptionForm.module.css'

const TITLE_MAX_LENGTH = 60

const EditListingDescriptionFormComponent = (props) => (
  <FinalForm
    {...props}
    render={(formRenderProps) => {
      const {
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors
      } = formRenderProps

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

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {}
      const errorMessageUpdateListing = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
        </p>
      ) : null

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
        </p>
      ) : null

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
        </p>
      ) : null

      const classes = classNames(css.root, className)
      const submitReady = (updated && pristine) || ready
      const submitInProgress = updateInProgress
      const submitDisabled = invalid || disabled || submitInProgress

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessageCreateListingDraft}
          {errorMessageUpdateListing}
          {errorMessageShowListing}
          <FieldTextInput
            id="title"
            name="title"
            className={css.title}
            type="text"
            label={titleMessage}
            placeholder={titlePlaceholderMessage}
            maxLength={TITLE_MAX_LENGTH}
            validate={composeValidators(required(titleRequiredMessage), maxLength60Message)}
            autoFocus
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

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}>
            {saveActionMsg}
          </Button>
        </Form>
      )
    }}
  />
)

EditListingDescriptionFormComponent.defaultProps = { className: null, fetchErrors: null }

EditListingDescriptionFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error
  })
}

export default compose(injectIntl)(EditListingDescriptionFormComponent)
