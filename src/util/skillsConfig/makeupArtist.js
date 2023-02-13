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
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.beautyRetail' })
        },
        {
          key: 'fashion',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.fashion' })
        },
        {
          key: 'bodyAndFacePainting',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.bodyAndFacePainting' })
        },
        {
          key: 'theatre',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.theatre' })
        },
        {
          key: 'television',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.television' })
        },
        {
          key: 'filmAndMovies',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.filmAndMovies' })
        },
        {
          key: 'personalServices',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.personalServices' })
        },
        {
          key: 'specializedMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.specializedMakeup' })
        },
        {
          key: 'fxMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.fxMakeup' })
        },
        {
          key: 'bridalMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.bridalMakeup' })
        },
        {
          key: 'stageMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.stageMakeup' })
        },
        {
          key: 'performanceMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.performanceMakeup' })
        },
        {
          key: 'airbrushMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.airbrushMakeup' })
        },
        {
          key: 'editorialMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.editorialMakeup' })
        },
        {
          key: 'photographicMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.photographicMakeup' })
        },
        {
          key: 'dragMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.dragMakeup' })
        },
        {
          key: 'fantasyMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.fantasyMakeup' })
        },
        {
          key: 'specialEffectsMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.specialEffectsMakeup' })
        },
        {
          key: 'prostheticMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.prostheticMakeup' })
        },
        {
          key: 'characterMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.characterMakeup' })
        },
        {
          key: 'runwayMakeup',
          label: intl.formatMessage({ id: 'MarketplaceConfig.makeupType.runwayMakeup' })
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
