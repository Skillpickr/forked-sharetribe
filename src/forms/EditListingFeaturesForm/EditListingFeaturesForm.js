import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import * as validators from '../../util/validators';
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../components';

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
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
        skill
      } = formRenderProps;

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
            label={'Do you have your own studio?'}
            validate={required}
          >
            <option disabled value="">
              Please choose from the list
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
            label="Please list the gear included in the listing price*"
            placeholder="Will expand while you write"
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
            label="Please add your subset of photographer skills (you can choose multiple)"
          />
          <FieldSelect
            className={css.features}
            name={soundLightExpKey}
            id={soundLightExpKey}
            label={'Sound & light experience'}
            validate={required}
          >
            <option disabled value="">
              Please choose from the list
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
            label="Please add your subset of DJ skills"
          />
          <FieldTextInput
            id="technicalRider"
            name="technicalRider"
            className={css.features}
            type="textarea"
            label="Technical rider"
            placeholder="Will expand while you write"
            validate={required}
          />
          <FieldTextInput
            id="cateringRider"
            name="cateringRider"
            className={css.features}
            type="textarea"
            label="Catering/hospitality rider"
            placeholder="Will expand while you write"
            validate={required}
          />
          <FieldSelect
            className={css.features}
            name={djGearForPlayingKey}
            id={djGearForPlayingKey}
            label={'DJ gear for playing'}
          >
            <option disabled value="">
              Please choose from the list
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
            label="Describe your playing style"
            placeholder="Will expand while you write"
            validate={required}
          />
          <FieldSelect
            className={css.features}
            name={songRequestKey}
            id={songRequestKey}
            label={'Are you accessible at the event for guest who request songs?'}
            validate={required}
          >
            <option disabled value="">
              Please choose from the list
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
            label={'Skill'}
            onChange={handleChange}
            value={skill}
          >
            <option disabled value="">
              Please choose from the list
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

export default EditListingFeaturesForm;
