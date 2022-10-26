import React, { useState, Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Form as FinalForm } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import { findOptionsForSelectFilter } from '../../util/search'
import { propTypes } from '../../util/types'
import config from '../../config'
import { Button, FieldCheckboxGroup, FieldSelect, FieldTextInput, Form, Alert } from '../../components'
import { compose } from 'redux'
import css from './EditListingFeaturesForm.module.css'
import { Skills, Categories } from '../../util/category'
import { CheckboxFieldsType, DropdownFieldsType } from '../../util/featuresFields'
import { required, composeValidators } from '../../util/validators'
import EditPhotographerFeaturesComponent from './skills/EditPhotographerFeaturesForm'
import EditDJFeaturesComponent from './skills/EditDjFeaturesForm'
import EditMusicianFeaturesComponent from './skills/EditMusicianFeaturesForm'
import EditBandFeaturesComponent from './skills/EditBandFeaturesForm'

class DefaultComponent extends React.Component {
  render() {
    return <h2>Please choose a profession</h2>
  }
}

const EditListingFeaturesFormComponent = (props) => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={(formRenderProps) => {
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
      } = formRenderProps

      const skillMessage = intl.formatMessage({
        id: 'EditListingFeaturesForm.skillMessage'
      })

      const classes = classNames(rootClassName || css.root, className)
      const submitReady = (updated && pristine) || ready
      const submitInProgress = updateInProgress
      const submitDisabled = disabled || submitInProgress
      const requiredCheckbox = 'You need to check a box'
      const requiredDropdown = 'You need to select a field'

      const { updateListingError, showListingsError } = fetchErrors || {}
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null

      // ############### MAIN COMPONENT ###########################
      const skillKey = 'skill'
      const skillOptions = findOptionsForSelectFilter(skillKey, filterConfig)
      const [state, setState] = useState(skill)
      const categoryKey = 'category'
      const categoryOptions = findOptionsForSelectFilter(categoryKey, filterConfig)

      let category = ''
      const handleChange = (skillSet) => {
        setState(skillSet)
        if (skillSet.includes(Skills.photographer)) {
          const opt = categoryOptions.find((element) => element.key === Categories.creative)
          category = opt.key
        }
        if (skillSet.includes(Skills.musician)) {
          const opt = categoryOptions.find((element) => element.key === Categories.performance)
          category = opt.key
        }
        if (skillSet.includes(Skills.dj)) {
          const opt = categoryOptions.find((element) => element.key === Categories.performance)
          category = opt.key
        }
        if (skillSet.includes(Skills.band)) {
          const opt = categoryOptions.find((element) => element.key === Categories.performance)
          category = opt.key
          console.log(category)
        }
        props.parentCallback(category)
      }

      // TODO: Make compnents change programatically
      // const djComponent = () => {
      //   return <EditDJFeaturesComponent filterConfig={filterConfig} intl={intl} />
      // }
      // const components = {
      //   photographer: PhotographerComponent,
      //   dj: djComponent,
      //   musician: MusicianComponent,
      //   band: BandComponent
      // }
      // const SelectedComponent = components[state]

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}
          <Alert type="secondary">
            <p>
              Let&apos;s get started and tell us about you and your artistic expertise. Add some details about your
              concept. Fill out what you can for now - you’ll be able to edit this later.
            </p>
          </Alert>
          <FieldSelect
            className={css.features}
            name={name}
            id={name}
            label={skillMessage}
            onChange={handleChange}
            value={skill}
            validate={required(requiredDropdown)}>
            <FormattedMessage id="EditListingFeaturesForm.chooseFromList">
              {(id) => <option value="">{id}</option>}
            </FormattedMessage>
            {skillOptions.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </FieldSelect>
          {/* {SelectedComponent ? <SelectedComponent /> : <DefaultComponent />} */}

          {/* Videographer */}

          {/* Photographer */}
          {state.includes(Skills.photographer) && (
            <EditPhotographerFeaturesComponent filterConfig={filterConfig} intl={intl} />
          )}

          {/* DJ */}
          {state.includes(Skills.dj) && <EditDJFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Musician Soloist */}
          {state.includes(Skills.musician) && <EditMusicianFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Bands */}
          {state.includes(Skills.band) && <EditBandFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}>
            {saveActionMsg}
          </Button>
        </Form>
      )
    }}
  />
)

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
  skill: ''
}

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
    updateListingError: propTypes.error
  }),
  filterConfig: propTypes.filterConfig,
  skill: string.isRequired,
  parentCallback: func.isRequired
}

const EditListingFeaturesForm = EditListingFeaturesFormComponent

export default compose(injectIntl)(EditListingFeaturesForm)
