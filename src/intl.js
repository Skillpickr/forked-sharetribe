import defaultMessages from './translations/en.json'
import frenchMessages from './translations/fr.json'
import danishMessages from './translations/da.json'
import config from './config'
import moment from 'moment'

const isTestEnv = process.env.NODE_ENV === 'test'

export const setupLocale = () => {
  if (isTestEnv) {
    // Use english as a default locale in tests
    // This affects app.test.js and app.node.test.js tests
    config.locale = 'en'
    return
  }

  // Set the Moment locale globally
  // See: http://momentjs.com/docs/#/i18n/changing-locale/
  moment.locale(config.locale)
}

export function messagesInLocale() {
  switch (process.env.REACT_APP_LANGUAGE) {
    case 'da':
      return danishMessages
    case 'fr':
      return frenchMessages
    default:
      return defaultMessages
  }
}
