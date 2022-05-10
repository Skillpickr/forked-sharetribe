import React, { useState } from "react";
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../components';

import css from './EditListingFeaturesForm.module.css';


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
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

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

      const soundLightExpKey = "soundLightExp"
      const ownStudioKey = "ownStudio"
      const skillOptions = findOptionsForSelectFilter('skill', filterConfig);
      const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig);
      const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig);
      const photographerKey = "photographerType"
      const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig);

      // const findTypeForSkill = (key, type) => {
      //   const key = key 

      //   if(skillOptions.key === 'dj'){
      //     const djKey = "djType"
      //     const djOptions = findOptionsForSelectFilter(djKey, filterConfig);
        
      //   }
      //   if (skillOptions.key === 'photographer'){
      //     const photographerKey = "photographerType"
      //     const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig);
      //   }
      // }
      const [fruit, setFruit] = useState();

      const skillSelected= ({ skill }) => {
        console.log(skill)
        return null;
      };
      

      handleSelectChange(type, value) {
        this.setState(prevState => {
          const selected = { ...prevState.selected, [type]: value };
          this.props.onChange(skillSelected(selected));
          console.log(selected)
          return { selected };
        });
      }


      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <div>
      <select 
            onChange={e => this.handleSelectChange('skill', e.target.value)}
              >
              <option disabled value="">
              {datePlaceholder}
            </option>
            {skillOptions.map(d => (
              <option key={o.key} value={o.soundLightExpKey}>
                {o.label}
              </option>
            ))}
      </select>
      <h1>Selected Fruit: {fruit}</h1>
    </div>
      <FieldSelect
        className={css.features}
        name={name}
        id={name}
        label={'Skill'}
        defaultValue="Select fruit"
              onChange={(e) => setSkill(e.target.value)}
      >
        {skillOptions.map(o => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}

      </FieldSelect>
      {/* DJ */}  

      {skillOptions.find(e => e.key === 'dj') ? <p>DJ is processing</p> : null}

      {/* VideoGrapher */}  

      

      {/* Photogapher */}      
      <FieldCheckboxGroup className={css.features} id={photographerKey} name={photographerKey} options={photographerOptions} label="Add you subset of skills" />
      <FieldSelect
        className={css.features}
        name={ownStudioKey}
        id={ownStudioKey}
        label={'Do you have your own studio?'}
      >
        {ownStudioOptions.map(o => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </FieldSelect>
      <FieldSelect
        className={css.features}
        name={soundLightExpKey}
        id={soundLightExpKey}
        label={'Sound & light experience'}
      >
        {soundLightExpOptions.map(o => (
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
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default EditListingFeaturesForm;
