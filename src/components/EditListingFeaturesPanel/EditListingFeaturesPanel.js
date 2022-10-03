import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FormattedMessage } from '../../util/reactIntl'

import { LISTING_STATE_DRAFT } from '../../util/types'
import { ensureListing } from '../../util/data'
import { EditListingFeaturesForm } from '../../forms'
import { ListingLink } from '../../components'

import css from './EditListingFeaturesPanel.module.css'

const FEATURES_NAME = 'skill'

class EditListingFeaturesPanel extends Component {
  constructor(props) {
    super(props)

    this.getInitialValues = this.getInitialValues.bind(this)
    this.getCategory = this.getCategory.bind(this)
    this.getSkill = this.getSkill.bind(this)

    this.state = {
      initialValues: this.getInitialValues(),
      category: this.getCategory(),
      skill: this.getSkill()
    }
  }

  getCurrentListing() {
    const { listing } = this.props
    const currentListing = ensureListing(listing)
    return currentListing
  }

  getCategory() {
    const { publicData } = this.getCurrentListing().attributes
    const category = publicData && publicData.category
    return { category }
  }

  getSkill() {
    const { publicData } = this.getCurrentListing().attributes
    const skill = publicData && publicData.skill
    return skill
  }

  getInitialValues() {
    const { publicData } = this.getCurrentListing().attributes
    const skill = publicData && publicData.skill
    const gear = publicData && publicData.gear
    const soundLightExp = publicData && publicData.soundLightExp
    const photographerType = publicData && publicData.photographerType
    const ownStudio = publicData && publicData.ownStudio
    const djType = publicData && publicData.djType
    const technicalRider = publicData && publicData.technicalRider
    const cateringRider = publicData && publicData.cateringRider
    const djGearForPlaying = publicData && publicData.djGearForPlaying
    const playingStyle = publicData && publicData.playingStyle
    const songRequest = publicData && publicData.songRequest
    const musicSoloistType = publicData && publicData.musicSoloistType
    const musicianType = publicData && publicData.musicianType
    const musicianGroupGenre = publicData && publicData.musicianGroupGenre
    const musicianGroupType = publicData && publicData.musicianGroupType
    const musicalGenre = publicData && publicData.musicalGenre
    return {
      photographerType,
      gear,
      soundLightExp,
      ownStudio,
      djType,
      technicalRider,
      cateringRider,
      djGearForPlaying,
      playingStyle,
      songRequest,
      musicSoloistType,
      musicianType,
      musicianGroupGenre,
      musicalGenre,
      musicianGroupType,
      skill
    }
  }

  render() {
    const {
      rootClassName,
      className,
      listing,
      disabled,
      ready,
      onSubmit,
      onChange,
      submitButtonText,
      panelUpdated,
      updateInProgress,
      errors
    } = this.props

    const classes = classNames(rootClassName || css.root, className)

    const isPublished = this.getCurrentListing().id && this.getCurrentListing().attributes.state !== LISTING_STATE_DRAFT
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditListingFeaturesPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingFeaturesPanel.createListingTitle" />
    )

    const handleCallback = (childData) => {
      this.setState({ category: childData })
    }

    const handleSubmit = (values) => {
      const {
        skill = [],
        photographerType = [],
        gear = '',
        soundLightExp = [],
        ownStudio = [],
        djType = [],
        technicalRider = '',
        cateringRider = '',
        djGearForPlaying = [],
        playingStyle = '',
        songRequest = [],
        musicSoloistType = '',
        musicianType = [],
        musicalGenre = [],
        musicianGroupGenre = [],
        musicianGroupType = []
      } = values
      let category = this.state.category
      const updatedValues = {
        publicData: {
          skill,
          photographerType,
          gear,
          soundLightExp,
          ownStudio,
          djType,
          technicalRider,
          cateringRider,
          djGearForPlaying,
          playingStyle,
          songRequest,
          category,
          musicSoloistType,
          musicianType,
          musicalGenre,
          musicianGroupGenre,
          musicianGroupType
        }
      }
      onSubmit(updatedValues)
    }
    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditListingFeaturesForm
          className={css.form}
          name={FEATURES_NAME}
          initialValues={this.state.initialValues}
          skill={this.state.skill}
          parentCallback={handleCallback}
          onSubmit={handleSubmit}
          onChange={onChange}
          saveActionMsg={submitButtonText}
          disabled={disabled}
          ready={ready}
          updated={panelUpdated}
          updateInProgress={updateInProgress}
          fetchErrors={errors}
        />
      </div>
    )
  }
}

EditListingFeaturesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null
}

const { bool, func, object, string } = PropTypes

EditListingFeaturesPanel.propTypes = {
  rootClassName: string,
  className: string,

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

export default EditListingFeaturesPanel
