import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FormattedMessage } from '../../util/reactIntl'
import { LISTING_STATE_DRAFT } from '../../util/types'
import { ensureOwnListing } from '../../util/data'
import { ListingLink } from '../../components'
import { EditListingPoliciesForm } from '../../forms'
import { propTypes } from '../../util/types'

import css from './EditListingPoliciesPanel.module.css'

const EditListingPoliciesPanel = (props) => {
  const {
    className,
    rootClassName,
    listing,
    disabled,
    ready,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    currentUser,
    intl
  } = props

  const classes = classNames(rootClassName || css.root, className)
  const currentListing = ensureOwnListing(listing)
  const { publicData } = currentListing.attributes
  const userName = currentUser.attributes.profile.firstName

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingPoliciesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingPoliciesPanel.createListingTitle" values={{ firstName: userName }} />
  )
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingPoliciesForm
        className={css.form}
        publicData={publicData}
        initialValues={{ rules: publicData.rules }}
        onSubmit={(values) => {
          const updateValues = {
            title: intl.formatMessage({ id: 'EditListingPoliciesPanel.title.placeholder' }),
            description: intl.formatMessage({ id: 'EditListingPoliciesPanel.description.placeholder' })
          }
          onSubmit(updateValues)
        }}
        onChange={onChange}
        disabled={disabled}
        ready={ready}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        currentUser={currentUser}
      />
    </div>
  )
}

const { func, object, string, bool } = PropTypes

EditListingPoliciesPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null
}

EditListingPoliciesPanel.propTypes = {
  currentUser: propTypes.currentUser,
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired
}

export default EditListingPoliciesPanel
