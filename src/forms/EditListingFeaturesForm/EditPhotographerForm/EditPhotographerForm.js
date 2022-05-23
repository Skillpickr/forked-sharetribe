import React, { useState } from "react";
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { findOptionsForSelectFilter } from '../../../util/search';
import { propTypes } from '../../../util/types';
import config from '../../../config';
import {  FieldCheckboxGroup, FieldSelect, FieldTextInput, Form } from '../../../components';

import css from './../EditListingFeaturesForm.module.css';

const EditPhotographerFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        // disabled,
        // ready,
        rootClassName,
        className,
        // name,
        // handleSubmit,
        // pristine,
        // saveActionMsg,
        // updated,
        // updateInProgress,
        // fetchErrors,
        filterConfig,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      
      const soundLightExpKey = 'soundLightExp';
      const ownStudioKey = 'ownStudio';
      const soundLightExpOptions = findOptionsForSelectFilter(soundLightExpKey, filterConfig);
      const ownStudioOptions = findOptionsForSelectFilter(ownStudioKey, filterConfig);
      const photographerKey = 'photographerType';
      const photographerOptions = findOptionsForSelectFilter(photographerKey, filterConfig);
      return (
        <div className={classes}>
              <FieldCheckboxGroup
                className={css.features}
                id={photographerKey}
                name={photographerKey}
                options={photographerOptions}
                label="Add you subset of skills"
              />
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
        </div>
      );
    }}
  />
);

EditPhotographerFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  // fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditPhotographerFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  // name: string.isRequired,
  onSubmit: func.isRequired,
  // saveActionMsg: string.isRequired,
  // updated: bool.isRequired,
  // updateInProgress: bool.isRequired,
  // fetchErrors: shape({
  //   showListingsError: propTypes.error,
  //   updateListingError: propTypes.error,
  // }),
  filterConfig: propTypes.filterConfig,
};

const EditPhotographerForm = EditPhotographerFormComponent;

export default EditPhotographerForm;
