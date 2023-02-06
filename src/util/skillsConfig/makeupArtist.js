import { CheckboxFieldsType, DropdownFieldsType } from '../featuresFields'
import config from '../../config'
import { createIntl, createIntlCache } from 'react-intl'

import { messagesInLocale } from '../../intl'

const cache = createIntlCache()
const intl = createIntl(
  {
    locale: config.locale,
    messages: messagesInLocale()
  },
  cache
)
export const makeupArtistConfig = [
  {
    id: CheckboxFieldsType.makeupArtistTypeKey,
    label: 'Makeup Artist',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_makeupArtistTypeType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'beautyRetail',
          label: 'Beauty Retail'
        },
        {
          key: 'fashion',
          label: 'Fashion'
        },
        {
          key: 'bodyAndFacePainting',
          label: 'Body and Face Painting'
        },
        {
          key: 'theatre',
          label: 'Theatre'
        },
        {
          key: 'television',
          label: 'Television'
        },
        {
          key: 'filmAndMovies',
          label: 'Film and Movies'
        },
        {
          key: 'personalServices',
          label: 'Personal Services (e.g. special occasion makeup)'
        },
        {
          key: 'specializedMakeup',
          label: 'Specialized Makeup (e.g. scars/deformities coverage)'
        },
        {
          key: 'fxMakeup',
          label: 'FX Makeup (e.g. gore, creatures)'
        },
        {
          key: 'bridalMakeup',
          label: 'Bridal Makeup (wedding)'
        },
        {
          key: 'stageMakeup',
          label: 'Stage Makeup'
        },
        {
          key: 'performanceMakeup',
          label: 'Performance Makeup'
        },
        {
          key: 'airbrushMakeup',
          label: 'Airbrush Makeup'
        },
        {
          key: 'editorialMakeup',
          label: 'Editorial Makeup'
        },
        {
          key: 'photographicMakeup',
          label: 'Photographic Makeup'
        },
        {
          key: 'dragMakeup',
          label: 'Drag Makeup'
        },
        {
          key: 'fantasyMakeup',
          label: 'Fantasy Makeup'
        },
        {
          key: 'specialEffectsMakeup',
          label: 'Special Effects Makeup'
        },
        {
          key: 'prostheticMakeup',
          label: 'Prosthetic Makeup'
        },
        {
          key: 'characterMakeup',
          label: 'Character Makeup'
        },
        {
          key: 'runwayMakeup',
          label: 'Runway Makeup'
        }
      ]
    }
  }

  //   {
  //     // Do you Provide Photo services as well?
  //     id: DropdownFieldsType.videoToPhotoServiceKey,
  //     type: '',
  //     group: 'secondary',
  //     queryParamNames: [''],
  //     config: {
  //       options: [
  //         { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
  //         { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
  //       ]
  //     }
  //   },
  //   {
  //     // Knowledge with interactive videos?
  //     id: DropdownFieldsType.videoInteractiveKey,
  //     type: '',
  //     group: 'secondary',
  //     queryParamNames: [''],
  //     config: {
  //       options: [
  //         { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
  //         { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
  //       ]
  //     }
  //   }
]
