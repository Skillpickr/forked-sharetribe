import React, { useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../components';
import { compose } from 'redux';
import css from './EditListingFeaturesForm.module.css';
import { Skills, Categories } from '../../util/category';
import { CheckboxFieldsType, DropdownFieldsType } from '../../util/featuresFields';
import { required, composeValidators } from '../../util/validators';

class PhotographerComponent extends React.Component {
  render() {
    return <h1>Hello you gifted Photographer</h1>;
  }
}

class DjComponent extends React.Component {
  render() {
    return <h1>Hello you talented DJ</h1>;
  }
}

class DefaultComponent extends React.Component {
  render() {
    return <h1>Please choose a profession</h1>;
  }
}

class MusicianComponent extends React.Component {
  render() {
    return <h1>Hello you musical genius</h1>;
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
        skill,
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

      const musicSoloistKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.musicSoloistKeyMessage',
      });

      const musicianTypeKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.musicianTypeKeyMessage',
      });

      const musicalGenreKeyMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.musicalGenreKeyMessage',
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
        id: 'EditListingFeaturesForm.cateringRiderMessage',
      });
      const cateringRiderPlaceholderMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.cateringRiderPlaceholderMessage',
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
      const requiredCheckbox = 'You need to check a box';
      const requiredDropdown = 'You need to select a field';

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

      // ############### Photographer COMPONENT ###########################
      const ownStudioKey = DropdownFieldsType.ownStudioKey;
      const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig);
      const photographerKey = CheckboxFieldsType.photographerTypeKey;
      const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig);
      const soundLightExpKey = DropdownFieldsType.soundLightExpKey;
      const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig);
      const photographerComponent = (
        <div>
          <FieldCheckboxGroup
            className={css.features}
            id={photographerKey}
            name={photographerKey}
            options={photographerOptions}
            label={photographerKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
          />
          <FieldSelect
            className={css.features}
            name={soundLightExpKey}
            id={soundLightExpKey}
            label={soundLightExpKeyMessage}
          >
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {soundLightExpOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect
            className={css.features}
            name={ownStudioKey}
            id={ownStudioKey}
            label={ownStudioKeyMessage}
          >
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
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

      // ############### DJ COMPONENT ###########################

      const djKey = CheckboxFieldsType.djTypeKey;
      const djOptions = findOptionsForSelectFilter(djKey, filterConfig);
      const djGearForPlayingKey = DropdownFieldsType.djGearForPlayingKey;
      const djGearForPlayingOptions = findOptionsForSelectFilter(djGearForPlayingKey, filterConfig);
      const songRequestKey = DropdownFieldsType.songRequestKey;
      const songRequestOptions = findOptionsForSelectFilter(songRequestKey, filterConfig);
      const djComponent = (
        <div>
          <FieldCheckboxGroup
            className={css.features}
            id={djKey}
            name={djKey}
            options={djOptions}
            label={djKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
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
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
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
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {songRequestOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
        </div>
      );
      // ############### Music Soloist COMPONENT ###########################

      const musicSoloistKey = DropdownFieldsType.musicianSoloKey;
      const musicSoloistOptions = findOptionsForSelectFilter(musicSoloistKey, filterConfig);
      const musicianTypeKey = CheckboxFieldsType.musicianTypeKey;
      const musicianTypeOptions = findOptionsForSelectFilter(musicianTypeKey, filterConfig);
      const musicalGenreKey = CheckboxFieldsType.musicalGenre;
      const musicalGenreOptions = findOptionsForSelectFilter(musicalGenreKey, filterConfig);
      const musicianSoloistComponent = (
        <div>
          <FieldSelect
            className={css.features}
            name={musicSoloistKey}
            id={musicSoloistKey}
            label={musicSoloistKeyMessage}
            validate={required(requiredDropdown)}
          >
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => (
                <option disabled value="">
                  {id}
                </option>
              )}
            </FormattedMessage>
            {musicSoloistOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldCheckboxGroup
            className={css.features}
            id={musicianTypeKey}
            name={musicianTypeKey}
            options={musicianTypeOptions}
            label={musicianTypeKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
          />
          <FieldCheckboxGroup
            className={css.features}
            id={musicalGenreKey}
            name={musicalGenreKey}
            options={musicalGenreOptions}
            label={musicalGenreKeyMessage}
            validate={composeValidators(required(requiredCheckbox))}
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
        </div>
      );

      // ############### MAIN COMPONENT ###########################
      const skillKey = 'skill';
      const skillOptions = findOptionsForSelectFilter(skillKey, filterConfig);
      const [state, setState] = useState(skill);
      const categoryKey = 'category';
      const categoryOptions = findOptionsForSelectFilter(categoryKey, filterConfig);

      let category = '';
      const handleChange = skillSet => {
        setState(skillSet);
        if (skillSet.includes(Skills.photographer)) {
          const opt = categoryOptions.find(element => element.key === Categories.creative);
          category = opt.key;
        }
        if (skillSet.includes(Skills.musicianSoloist)) {
          const opt = categoryOptions.find(element => element.key === Categories.performance);
          category = opt.key;
        }
        if (skillSet.includes(Skills.dj)) {
          const opt = categoryOptions.find(element => element.key === Categories.performance);
          category = opt.key;
        }
        props.parentCallback(category);
      };

      const components = {
        photographer: PhotographerComponent,
        dj: DjComponent,
        musicianSoloist: MusicianComponent,
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
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {id => <option value="">{id}</option>}
            </FormattedMessage>
            {skillOptions.map(o => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          {SelectedComponent ? <SelectedComponent /> : <DefaultComponent />}

          {/* VideoGrapher */}

          {/* Photogapher */}
          {state.includes(Skills.photographer) && photographerComponent}

          {/* DJ */}
          {state.includes(Skills.dj) && djComponent}

          {/* Musician Soloist */}
          {state.includes(Skills.musicianSoloist) && musicianSoloistComponent}

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
  skill: '',
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
  skill: string.isRequired,
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default compose(injectIntl)(EditListingFeaturesForm);
