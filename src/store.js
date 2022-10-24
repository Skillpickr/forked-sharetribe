// Configs and store setup
import config from './config'
import { LoggingAnalyticsHandler, GoogleAnalyticsHandler } from './analytics/handlers'
import configureStore from './configStore'

// Utils
import { createInstance, types as sdkTypes } from './util/sdkLoader'
import * as apiUtils from './util/api'

// import your fontawesome library
import './util/fontawesome'

const setupAnalyticsHandlers = () => {
  let handlers = []

  // Log analytics page views and events in dev mode
  if (config.dev) {
    handlers.push(new LoggingAnalyticsHandler())
  }

  // Add Google Analytics 4 (GA4) handler if tracker ID is found
  if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    if (window?.gtag) {
      handlers.push(new GoogleAnalyticsHandler(window.gtag))
    } else {
      // Some adblockers (e.g. Ghostery) might block the Google Analytics integration.
      console.warn('Google Analytics (window.gtag) is not available. It might be that your adblocker is blocking it.')
    }
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID.indexOf('G-') !== 0) {
      console.warn('Google Analytics 4 (GA4) should have measurement id that starts with "G-" prefix')
    }
  }

  return handlers
}

const baseUrl = config.sdk.baseUrl ? { baseUrl: config.sdk.baseUrl } : {}
const assetCdnBaseUrl = config.sdk.assetCdnBaseUrl ? { assetCdnBaseUrl: config.sdk.assetCdnBaseUrl } : {}
// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__ || '{}'
const initialState = JSON.parse(preloadedState, sdkTypes.reviver)

export const sdk = createInstance({
  transitVerbose: config.sdk.transitVerbose,
  clientId: config.sdk.clientId,
  secure: config.usingSSL,
  typeHandlers: apiUtils.typeHandlers,
  ...baseUrl,
  ...assetCdnBaseUrl
})

const analyticsHandlers = setupAnalyticsHandlers()

const store = configureStore(initialState, sdk, analyticsHandlers)

export default store
