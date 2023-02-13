import React, { useState, Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import classNames from 'classnames'
import { Form as FinalForm } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import { findOptionsForSelectFilter } from '../../util/search'
import { propTypes } from '../../util/types'
import config from '../../config'
import * as custom from '../../marketplace-custom-config.js'

import { Button, FieldSelect, Form, Alert } from '../../components'
import { compose } from 'redux'
import css from './EditListingFeaturesForm.module.css'
import { Skills, Categories } from '../../util/category'
import { required } from '../../util/validators'
import EditPhotographerFeaturesComponent from './skills/EditPhotographerFeaturesForm'
import EditVideographerFeaturesComponent from './skills/EditVideographerFeaturesForm'
import EditDJFeaturesComponent from './skills/EditDjFeaturesForm'
import EditMusicianFeaturesComponent from './skills/EditMusicianFeaturesForm'
import EditBandFeaturesComponent from './skills/EditBandFeaturesForm'
import EditMakeupArtistFeaturesComponent from './skills/EditMakeupArtistFeaturesForm'
import EditDancerFeaturesComponent from './skills/EditDancerFeaturesForm'
import EditMiscellaneousFeaturesComponent from './skills/EditMiscellaneousFeaturesForm'

class DefaultComponent extends React.Component {
  render() {
    return <h2>Please choose a profession</h2>
  }
}

const setCategory = (skillSet, categoryOptions) => {
  switch (true) {
    case skillSet.includes(Skills.photographer):
    case skillSet.includes(Skills.videographer):
    case skillSet.includes(Skills.makeupArtist):
    case skillSet.includes(Skills.dancer):
      return categoryOptions.find((element) => element.key === Categories.creative).key
    case skillSet.includes(Skills.musician):
    case skillSet.includes(Skills.dj):
    case skillSet.includes(Skills.band):
      return categoryOptions.find((element) => element.key === Categories.performance).key
    case skillSet.includes(Skills.miscellaneous):
    default:
      return ''
  }
}

const components = {
  [Skills.photographer]: EditPhotographerFeaturesComponent,
  [Skills.videographer]: EditVideographerFeaturesComponent,
  [Skills.musician]: EditMusicianFeaturesComponent,
  [Skills.dj]: EditDJFeaturesComponent,
  [Skills.band]: EditBandFeaturesComponent,
  [Skills.makeupArtist]: EditMakeupArtistFeaturesComponent,
  [Skills.dancer]: EditDancerFeaturesComponent,
  [Skills.miscellaneous]: EditMiscellaneousFeaturesComponent
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
      const requiredCheckbox = intl.formatMessage({
        id: 'EditListingFeaturesForm.requiredCheckbox'
      })
      const requiredDropdown = intl.formatMessage({
        id: 'EditListingFeaturesForm.requiredDropdown'
      })

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
      const categoryKey = 'category'
      const skillOptions = findOptionsForSelectFilter(skillKey, filterConfig)
      const categoryOptions = findOptionsForSelectFilter(categoryKey, filterConfig)

      const [state, setState] = useState(skill)

      const handleChange = (skillSet) => {
        setState(skillSet)
        props.parentCallback(setCategory(skillSet, categoryOptions))
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
            <div>
              <p>
                <FormattedMessage id="EditListingFeaturesForm.guide" />
              </p>
            </div>
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

          {/* Photographer */}
          {state.includes(Skills.photographer) && (
            <EditPhotographerFeaturesComponent filterConfig={filterConfig} intl={intl} />
          )}

          {/* Videographer */}
          {state.includes(Skills.videographer) && (
            <EditVideographerFeaturesComponent filterConfig={filterConfig} intl={intl} />
          )}

          {/* DJ */}
          {state.includes(Skills.dj) && <EditDJFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Musician Soloist */}
          {state.includes(Skills.musician) && <EditMusicianFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Bands */}
          {state.includes(Skills.band) && <EditBandFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Makeup Artist */}
          {state.includes(Skills.makeupArtist) && (
            <EditMakeupArtistFeaturesComponent filterConfig={filterConfig} intl={intl} />
          )}

          {/* Dancer */}
          {state.includes(Skills.dancer) && <EditDancerFeaturesComponent filterConfig={filterConfig} intl={intl} />}

          {/* Miscellaneous TODO: figure how the setup should be
          {state.includes(Skills.miscellaneous) && (
            <EditMiscellaneousFeaturesComponent filterConfig={filterConfig} intl={intl} />
          )} */}

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
  filterConfig: custom.filters,
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
