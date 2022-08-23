import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';

import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureListing } from '../../util/data';
import { EditListingFeaturesForm } from '../../forms';
import { ListingLink } from '../../components';

import css from './EditListingFeaturesPanel.module.css';

const FEATURES_NAME = 'skill';

const EditListingFeaturesPanel = props => {
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
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;
  const skill = publicData && publicData.skill;
  const category = publicData && publicData.category;
  const gear = publicData && publicData.gear;
  const soundLightExp = publicData && publicData.soundLightExp;
  const photographerType = publicData && publicData.photographerType;
  const ownStudio = publicData && publicData.ownStudio;
  const djType = publicData && publicData.djType;
  const technicalRider = publicData && publicData.technicalRider;
  const cateringRider = publicData && publicData.cateringRider;
  const djGearForPlaying = publicData && publicData.djGearForPlaying;
  const playingStyle = publicData && publicData.playingStyle;
  const songRequest = publicData && publicData.songRequest;
  const musicSoloistType = publicData && publicData.musicSoloistType;
  const musicianType = publicData && publicData.musicianType;
  const musicalGenre = publicData && publicData.musicalGenre;

  const initialValues = {
    skill,
    category,
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
    musicalGenre,
  };

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingFeaturesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingFeaturesPanel.createListingTitle" />
  );

  let setCategory = '';
  const handleCallback = childData => {
    setCategory = childData;
  };
  const handleSubmit = values => {
    let category = '';
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
    } = values;
    category = setCategory;
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
      },
    };
    onSubmit(updatedValues);
  };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingFeaturesForm
        className={css.form}
        name={FEATURES_NAME}
        initialValues={initialValues}
        skill={skill}
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
  );
};

EditListingFeaturesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

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
  errors: object.isRequired,
};

export default EditListingFeaturesPanel;
