import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FormattedMessage } from '../../util/reactIntl'

import { LISTING_STATE_DRAFT } from '../../util/types'
import { ensureListing } from '../../util/data'
import { EditListingFeaturesForm } from '../../forms'
import { ListingLink } from '../../components'
import { ensureOwnListing } from '../../util/data'

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
    const currentListing = ensureOwnListing(listing)
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
    const { publicData, description, title } = this.getCurrentListing().attributes
    const skill = publicData && publicData.skill
    const gear = publicData && publicData.gear
    const ownStudio = publicData && publicData.ownStudio
    const soundLightExp = publicData && publicData.soundLightExp
    const photographerType = publicData && publicData.photographerType
    const videographerType = publicData && publicData.videographerType
    const videoInteractiveService = publicData && publicData.videoInteractiveService
    const videoToPhotoService = publicData && publicData.videoToPhotoService
    const photoToVideoService = publicData && publicData.photoToVideoService
    const editingService = publicData && publicData.editingService
    const djType = publicData && publicData.djType
    const technicalRider = publicData && publicData.technicalRider
    const cateringRider = publicData && publicData.cateringRider
    const djGearForPlaying = publicData && publicData.djGearForPlaying
    const playingStyle = publicData && publicData.playingStyle
    const songRequest = publicData && publicData.songRequest
    const musicianSoloType = publicData && publicData.musicianSoloType
    const musicianType = publicData && publicData.musicianType
    const musicianGenre = publicData && publicData.musicianGenre
    const bandGenre = publicData && publicData.bandGenre
    const bandType = publicData && publicData.bandType

    return {
      title,
      description,
      photographerType,
      videographerType,
      videoInteractiveService,
      videoToPhotoService,
      editingService,
      photoToVideoService,
      gear,
      soundLightExp,
      ownStudio,
      djType,
      technicalRider,
      cateringRider,
      djGearForPlaying,
      playingStyle,
      songRequest,
      musicianSoloType,
      musicianType,
      musicianGenre,
      bandGenre,
      bandType,
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
      if (this.state.category !== childData) {
        this.setState({ category: childData })
      }
      // this.setState(prevState => ({
      //             // object that we want to update
      //         ...prevState,    // keep all other key-value pairs
      //         category: childData      // update the value of specific key
      //   }))
    }

    //       console.log("ChildData: ", childData.currentTarget.value);
    //   let { category } = this.state;
    //   category = childData

    //   this.setState(state => ({
    //     ...state,
    //     ...category
    //   }));
    // console.log("Category : ", category)

    const handleSubmit = (values) => {
      const {
        title,
        description,
        skill = [],
        photographerType = [],
        videographerType = [],
        gear = '',
        photoToVideoService = [],
        videoInteractiveService = [],
        videoToPhotoService = [],
        editingService = [],
        soundLightExp = [],
        ownStudio = [],
        djType = [],
        technicalRider = '',
        cateringRider = '',
        djGearForPlaying = [],
        playingStyle = '',
        songRequest = [],
        musicianSoloType = '',
        musicianType = [],
        musicianGenre = [],
        bandGenre = [],
        bandType = []
      } = values
      let category = this.state.category
      const updatedValues = {
        title: title.trim(),
        description,
        publicData: {
          skill,
          photographerType,
          videographerType,
          videoInteractiveService,
          videoToPhotoService,
          editingService,
          photoToVideoService,
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
          musicianSoloType,
          musicianType,
          musicianGenre,
          bandGenre,
          bandType
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
