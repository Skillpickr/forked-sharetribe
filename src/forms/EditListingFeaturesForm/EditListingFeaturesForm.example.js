import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'skills';

const initialValueArray = ['hatha', 'vinyasa', 'yin'];
const initialValues = { [NAME]: initialValueArray };

const filterConfig = [
  {
    id: 'skills',
    label: 'Yoga styles',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_skills'],
    config: {
      mode: 'has_all',
      options: [
        { key: 'ashtanga', label: 'Ashtanga' },
        { key: 'hatha', label: 'Hatha' },
        { key: 'kundalini', label: 'Kundalini' },
        { key: 'restorative', label: 'Restorative' },
        { key: 'vinyasa', label: 'Vinyasa' },
        { key: 'yin', label: 'Yin' },
      ],
    },
  },
];

export const Skills = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save yoga styles',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
    filterConfig,
  },
  group: 'forms',
};
