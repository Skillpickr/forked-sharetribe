import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import * as validators from '../../util/validators';
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../components';
import { compose } from 'redux';

import css from './EditListingFeaturesForm.module.css';

class PhotographerComponent extends React.Component {
  render() {
    return <h1>Hello, you gifted Photographer</h1>;
  }
}

class DjComponent extends React.Component {
  render() {
    return <h1>Hello, you talented DJ</h1>;
  }
}

class DefaultComponent extends React.Component {
  render() {
    return <h1>Please choose a profession</h1>;
  }
}

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        handleSubmit,
        pristine,
        intl,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
        skill
      } = formRenderProps;

      const ownStudioKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.ownStudioKeyMessage',
      });
      const gearMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.gear',
      });
      const gearMessagePlaceholder = intl.formatMessage({
        id: 'EditListingFeaturesForm.gearMessagePlaceholder',
      });

      const photographerKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.photographerKeyMessage',
      });
      const soundLightExpKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.soundLightExpKeyMessage',
      });

      const djKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.djKeyMessage',
      });

      const technicalRiderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.technicalRiderMessage',
      });
      const technicalRiderPlaceholderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.technicalRiderPlaceholderMessage',
      });

      const cateringRiderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.photographerKeyMessage',
      });
      const cateringRiderPlaceholderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.soundLightExpKeyMessage',
      });


      const djGearForPlayingKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.djGearForPlayingKeyMessage',
      });

      const playingStyleMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.playingStyleMessage',
      });
      const playingStylePlaceholderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.playingStylePlaceholderMessage',
      });
      const songRequestKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.songRequestKeyMessage',
      });
      const skillMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.skillMessage',
      });

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;
      const required = validators.required('This field is required');

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      // ############### SHARE COMPONENT ###########################
      const ownStudioKey = 'ownStudio';
      const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig);
      const sharedComponent = (
        <div>
          <FieldSelect
            className={css.features}
            name={ownStudioKey}
            id={ownStudioKey}
            label={ownStudioKeyMessage}
          >
            <option disabled value="">
              <FormattedMessage id="EditListingFeaturesForm.chooseFromList" />
            </option>
            {ownStudioOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldTextInput
            id="gear"
            name="gear"
            className={css.features}
            type="textarea"
            label={gearMessage}
            placeholder={gearMessagePlaceholder}
          />
        </div>
      );

      // ############### Photographer COMPONENT ###########################
      const photographerKey = 'photographerType';
      const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig);
      const soundLightExpKey = 'soundLightExp';
      const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig);
      const photographerComponent = (
        <div>
          <FieldCheckboxGroup
            className={css.features}
            id={photographerKey}
            name={photographerKey}
            options={photographerOptions}
            label={photographerKeyMessage}
          />
          <FieldSelect
            className={css.features}
            name={soundLightExpKey}
            id={soundLightExpKey}
            label={soundLightExpKeyMessage}
          >
            <option disabled value="">
              <FormattedMessage id="EditListingFeaturesForm.chooseFromList" />
            </option>
            {soundLightExpOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          {sharedComponent}
        </div>
      );

      // ############### DJ COMPONENT ###########################
      const djKey = 'djType';
      const djOptions = findOptionsForSelectFilter(djKey, filterConfig);
      const djGearForPlayingKey = 'djGearForPlaying';
      const djGearForPlayingOptions = findOptionsForSelectFilter(djGearForPlayingKey, filterConfig);
      const songRequestKey = 'songRequest';
      const songRequestOptions = findOptionsForSelectFilter(songRequestKey, filterConfig);
      const djComponent = (
        <div>
          <FieldCheckboxGroup
            className={css.features}
            id={djKey}
            name={djKey}
            options={djOptions}
            label={djKeyMessage}
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
            label={djGearForPlayingKeyMessage}
          >
            <option disabled value="">
              <FormattedMessage id="EditListingFeaturesForm.chooseFromList" />
            </option>
            {djGearForPlayingOptions.map(o => (
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
          <FieldSelect
            className={css.features}
            name={songRequestKey}
            id={songRequestKey}
            label={songRequestKeyMessage}
          >
            <option disabled value="">
              <FormattedMessage id="EditListingFeaturesForm.chooseFromList" />
            </option>
            {songRequestOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          {sharedComponent}
        </div>
      );

      // ############### MAIN COMPONENT ###########################
      const skillKey = 'skill';
      const skillOptions = findOptionsForSelectFilter(skillKey, filterConfig);
      console.log(filterConfig[6].type)
      console.log(filterConfig)
      const [state, setState] = useState(skill);
      const handleChange = e => {
        setState(e);
      };
      const components = {
        none: DefaultComponent,
        photographer: PhotographerComponent,
        dj: DjComponent,
      };
      const SelectedComponent = components[state];

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldSelect
            className={css.features}
            name={name}
            id={name}
            label={skillMessage}
            onChange={handleChange}
            value={skill}
          >
            <option disabled value="">
              <FormattedMessage id="EditListingFeaturesForm.chooseFromList" />
            </option>
            {skillOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          {SelectedComponent ? <SelectedComponent /> : <DefaultComponent />}
          {/* {SelectedComponent ? <SelectedComponent /> : <DefaultComponent /> } */}

          {/* VideoGrapher */}

          {/* Photogapher */}
          {state.includes('photographer') && photographerComponent}

          {/* DJ */}
          {state.includes('dj') && djComponent}

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
  skill: null
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
    intl: intlShape.isRequired,
  className: string,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
  skill: string.isRequired
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default compose(injectIntl)(EditListingFeaturesForm);
