import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_skills';

const options = [
  { key: 'influencer', label: 'Influencer' },
  { key: Skills.photographer, label: 'Photographer' },
  { key: 'keynote-speaker', label: 'Keynote Speaker' },
  { key: 'teacher', label: 'Teacher' },
  { key: 'animator', label: 'Animator' },
  { key: 'designer', label: 'Designer' },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const SkillsFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const skills = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!skills ? skills : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="skills"
      queryParamNames={[URL_PARAM]}
      label="skills"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const SkillsFilterPopupExample = {
  component: SkillsFilterPopup,
  props: {},
  group: 'filters',
};

const SkillsFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const skills = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!skills ? skills : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="skills"
      queryParamNames={[URL_PARAM]}
      label="skills"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const SkillsFilterPlainExample = {
  component: SkillsFilterPlain,
  props: {},
  group: 'filters',
};
