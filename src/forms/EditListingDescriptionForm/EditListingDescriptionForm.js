import React from 'react'
import { arrayOf, bool, func, shape, string } from 'prop-types'
import { compose } from 'redux'
import { Form as FinalForm } from 'react-final-form'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { propTypes } from '../../util/types'
import { maxLength, required, composeValidators, validBusinessURL } from '../../util/validators'
import { Form, Button, FieldTextInput, Alert } from '../../components'

import css from './EditListingDescriptionForm.module.css'
import EditListingOtherInfoForm from '../EditListingFeaturesForm/skills/EditListingOtherInfoForm'

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

      const shopMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.shop'
      })
      const shopPlaceholderMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.shopPlaceholder'
      })
      const shopRequiredMessage = intl.formatMessage({
        id: 'EditListingDescriptionForm.shopRequired'
      })

      const { updateListingError, createListingDraftError, showListingsError } = fetchErrors || {}
      const errorMessageUpdateListing = updateListingError ? (
        <Alert type="error">
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.updateFailed" />
          </p>
        </Alert>
      ) : null

      // This error happens only on first tab (of EditListingWizard)
      const errorMessageCreateListingDraft = createListingDraftError ? (
        <Alert type="error">
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.createListingDraftError" />
          </p>
        </Alert>
      ) : null

      const errorMessageShowListing = showListingsError ? (
        <Alert type="error">
          <p className={css.error}>
            <FormattedMessage id="EditListingDescriptionForm.showListingFailed" />
          </p>
        </Alert>
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
          <Alert type="secondary">
            <p>
              Don’t sweat it! You can just draft a version of your concept now and change it later. <br></br>So
              let&apos;s get started and tell us about you and your artistic expertise.
            </p>
          </Alert>
          {/* SHOP NAME */}
          {/* We find creative artists often draw inspiration from what they sell, their style, pretty much anything goes. */}
          {/* <FieldTextInput
            id="shop"
            name="shop"
            className={css.description}
            type="text"
            label={shopMessage}
            placeholder={shopPlaceholderMessage}
            validate={composeValidators(required(shopRequiredMessage))}
          /> */}
          <EditListingOtherInfoForm></EditListingOtherInfoForm>
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
