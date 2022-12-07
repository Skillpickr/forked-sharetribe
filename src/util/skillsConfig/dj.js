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

export const djConfig = [
  {
    id: CheckboxFieldsType.djTypeKey,
    label: 'DJ',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_djType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'allround', label: 'All around DJ' },
        { key: 'wedding', label: 'Wedding DJ' },
        { key: 'radio', label: 'Radio DJ' },
        { key: 'club', label: 'Club DJ' },
        { key: 'mobile', label: 'Mobile DJ' },
        { key: 'turntablist', label: 'Turntablist' },
        { key: 'corporate', label: 'Corporate event DJ' },
        { key: 'birthday', label: 'Birthday DJ' }
      ]
    }
  },
  {
    id: DropdownFieldsType.songRequestKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.songRequest.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.songRequest.no' }) },
        { key: 'depends', label: intl.formatMessage({ id: 'MarketplaceConfig.songRequest.askMe' }) }
      ]
    }
  },
  {
    id: DropdownFieldsType.djGearForPlayingKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'notIncluded', label: intl.formatMessage({ id: 'MarketplaceConfig.djGearForPlayingKey.provided' }) },
        { key: 'included', label: intl.formatMessage({ id: 'MarketplaceConfig.djGearForPlayingKey.included' }) }
      ]
    }
  }
]
