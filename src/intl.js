import defaultMessages from './translations/en.json'
import frenchMessages from './translations/fr.json'
import danishMessages from './translations/da.json'
import config from './config'

export function messagesInLocale() {
  switch (config.locale) {
    case 'da':
      return danishMessages
    case 'fr':
      return frenchMessages
    default:
      return defaultMessages
  }
}
