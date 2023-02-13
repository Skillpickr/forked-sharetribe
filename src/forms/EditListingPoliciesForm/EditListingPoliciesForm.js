import React from 'react'
import { bool, func, shape, string } from 'prop-types'
import { compose } from 'redux'
import { Form as FinalForm } from 'react-final-form'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { propTypes } from '../../util/types'
import { Form, Button, FieldTextInput, Alert } from '../../components'

import css from './EditListingPoliciesForm.module.css'

export const EditListingPoliciesFormComponent = (props) => (
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

      const rulesLabelMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesLabel'
      })
      const rulesPlaceholderMessage = intl.formatMessage({
        id: 'EditListingPoliciesForm.rulesPlaceholder'
      })

      const { updateListingError, showListingsError } = fetchErrors || {}
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.updateFailed" />
        </p>
      ) : null
      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingPoliciesForm.showListingFailed" />
        </p>
      ) : null

      const classes = classNames(css.root, className)
      const submitReady = (updated && pristine) || ready
      const submitInProgress = updateInProgress
      const submitDisabled = invalid || disabled || submitInProgress

      return (
        <form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <Alert type="secondary">
            <div>
              <p>
                <FormattedMessage id="EditListingPoliciesPanel.createListingDescription" />
              </p>
              <p>
                <FormattedMessage id="EditListingPoliciesPanel.createListingDescriptionTwo" />
              </p>
              <p>
                <FormattedMessage id="EditListingPoliciesPanel.createListingDescriptionThree" />
              </p>
            </div>
          </Alert>
          {/* <FieldTextInput
            id="rules"
            name="rules"
            className={css.policy}
            type="textarea"
            label={rulesLabelMessage}
            placeholder={rulesPlaceholderMessage}
          /> */}
          <iframe
            src={'https://www.loom.com/embed/577c359098014aa8a1876678e5f9a1b5'}
            style={{ marginTop: 72, width: '100%', height: '100%', minHeight: 400 }}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen></iframe>

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}>
            {saveActionMsg}
          </Button>
        </form>
      )
    }}
  />
)

EditListingPoliciesFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
  currentUser: null
}

EditListingPoliciesFormComponent.propTypes = {
  currentUser: propTypes.currentUser,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  selectedPlace: propTypes.place,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error
  })
}

export default compose(injectIntl)(EditListingPoliciesFormComponent)
