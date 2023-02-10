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

export const dancerConfig = [
  {
    id: CheckboxFieldsType.dancerTypeKey,
    label: 'Dancer',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_dancerType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'ballet', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.ballet' }) },
        { key: 'jazz', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.jazz' }) },
        { key: 'contemporary', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.contemporary' }) },
        { key: 'tap', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.tap' }) },
        { key: 'hipHop', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.hipHop' }) },
        { key: 'break', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.break' }) },
        { key: 'ballroom', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.ballroom' }) },
        { key: 'flamenco', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.flamenco' }) },
        { key: 'salsa', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.salsa' }) },
        { key: 'irish', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.irish' }) },
        { key: 'belly', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.belly' }) },
        { key: 'modern', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.modern' }) },
        { key: 'lyrical', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.lyrical' }) },
        { key: 'street', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.street' }) },
        { key: 'traditionalFolk', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.traditionalFolk' }) },
        { key: 'krumping', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.krumping' }) },
        { key: 'popping', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.popping' }) },
        { key: 'house', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.house' }) },
        { key: 'commercial', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.commercial' }) },
        { key: 'latin', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.latin' }) },
        { key: 'samba', label: intl.formatMessage({ id: 'MarketplaceConfig.dancerType.samba' }) }
      ]
    }
  }
]
