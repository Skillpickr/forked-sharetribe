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
export const sharedConfig = [
  // Does the creative has own studio?
  {
    id: DropdownFieldsType.ownStudioKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
      ]
    }
  },
  //   Does the creative has Sound and Light experience?
  {
    id: DropdownFieldsType.soundLightExpKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.soundLightExpKey.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.soundLightExpKey.no' }) },
        { key: 'maybe', label: intl.formatMessage({ id: 'MarketplaceConfig.soundLightExpKey.maybe' }) }
      ]
    }
  },
  // Does the Creative post-edit their materials?
  {
    id: DropdownFieldsType.editingServiceKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
      ]
    }
  },
  {
    id: DropdownFieldsType.constellationKey,
    label: 'Constellation',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_constellation'],
    config: {
      // Schema type is enum for SelectSingleFilter
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      options: [
        { key: 'single', label: 'Single' },
        { key: 'duo', label: 'Duo' },
        { key: 'trio', label: 'Trio' },
        { key: 'quartet', label: 'Quartet' },
        { key: 'group', label: 'Group' }
      ]
    }
  }
]
