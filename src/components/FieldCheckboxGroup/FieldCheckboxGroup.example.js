/* eslint-disable react/display-name */
import React from 'react'
import { Form as FinalForm, FormSpy } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { Button } from '../../components'
import FieldCheckboxGroup from './FieldCheckboxGroup'
import { requiredFieldArrayCheckbox } from '../../util/validators'
import { Skills } from '../../util/category'

const formName = 'Styleguide.FieldCheckboxGroup'
const formNameRequired = 'Styleguide.FieldCheckboxGroupRequired'

const label = <h3>Yoga styles</h3>

const commonProps = {
  label: label,
  options: [
    { key: 'influencer', label: 'Influencer' },
    { key: Skills.photographer, label: 'Photographer' },
    { key: 'keynote-speaker', label: 'Keynote Speaker' },
    { key: 'teacher', label: 'Teacher' },
    { key: 'animator', label: 'Animator' },
    { key: 'designer', label: 'Designer' }
  ],
  twoColumns: true
}

const optionalProps = {
  name: 'skills-optional',
  id: 'skills-optional',
  ...commonProps
}

const requiredProps = {
  name: 'skills-required',
  id: `${formNameRequired}.skills-required`,
  ...commonProps,
  validate: requiredFieldArrayCheckbox('this is required')
}
const tosProps = {
  name: 'terms-of-service',
  id: `${formNameRequired}.tos-accepted`,
  options: [
    {
      key: 'tos',
      label: 'Terms of Service'
    }
  ],
  validate: requiredFieldArrayCheckbox('You need to accept Terms of Service')
}

const formComponent = (country) => (props) =>
  (
    <FinalForm
      {...props}
      mutators={{ ...arrayMutators }}
      render={(fieldRenderProps) => {
        const { handleSubmit, invalid, submitting, componentProps, onChange } = fieldRenderProps

        const submitDisabled = invalid || submitting

        return (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit(e)
            }}>
            <FormSpy onChange={onChange} subscription={{ values: true, dirty: true }} />
            <FieldCheckboxGroup {...componentProps} />

            <Button style={{ marginTop: 24 }} type="submit" disabled={submitDisabled}>
              Submit
            </Button>
          </form>
        )
      }}
    />
  )

export const Optional = {
  component: formComponent(formName),
  props: {
    onChange: (formState) => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values)
      }
    },
    onSubmit: (values) => {
      console.log('Submit values: ', values)
    },
    initialValues: { [optionalProps.name]: ['jacuzzi', 'towels'] },
    componentProps: optionalProps
  },
  group: 'inputs'
}

export const Required = {
  component: formComponent(formNameRequired),
  props: {
    onChange: (formState) => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values)
      }
    },
    onSubmit: (values) => {
      console.log('Submit values: ', values)
    },
    componentProps: requiredProps
  },
  group: 'inputs'
}

export const ToSAccepted = {
  component: formComponent(formNameRequired),
  props: {
    onChange: (formState) => {
      if (formState.dirty) {
        console.log('form values changed to:', formState.values)
      }
    },
    onSubmit: (values) => {
      console.log('Submit values: ', values)
    },
    componentProps: tosProps
  },
  group: 'inputs'
}
