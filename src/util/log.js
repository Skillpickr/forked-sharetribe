/**
 * Error logging
 *
 * Can be used to log errors to console or and eternal
 * error logging system, like Sentry for example.
 *
 */

import * as Sentry from '@sentry/react'
import config from '../config'
import { responseApiErrorInfo } from './errors'
import { BrowserTracing } from '@sentry/tracing'
import routeConfiguration from '../routeConfiguration'
import { matchPath } from 'react-router-dom'
import { createBrowserHistory } from 'history'

/**
 * Set up error handling. If a Sentry DSN is
 * provided a Sentry client will be installed.
 */
export const setup = () => {
  const history = createBrowserHistory()
  if (config.sentryDsn) {
    // Configures the Sentry client. Adds a handler for
    // any uncaught exception.
    Sentry.init({
      dsn: config.sentryDsn,
      environment: config.env,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.reactRouterV5Instrumentation(history, routeConfiguration, matchPath)
        })
      ],
      tracesSampleRate: process.env.REACT_APP_SENTRY_TRACE_SAMPLING
    })
  }
}

/**
 * Set user ID for the logger so that it
 * can be attached to Sentry issues.
 *
 * @param {String} userId ID of current user
 */
export const setUserId = (userId) => {
  Sentry.configureScope((scope) => {
    scope.setUser({ id: userId })
  })
}

/**
 * Clears the user ID.
 */

export const clearUserId = () => {
  Sentry.configureScope((scope) => {
    scope.setUser(null)
  })
}

const printAPIErrorsAsConsoleTable = (apiErrors) => {
  if (apiErrors != null && apiErrors.length > 0 && typeof console.table === 'function') {
    console.log('Errors returned by Marketplace API call:')
    console.table(apiErrors.map((err) => ({ status: err.status, code: err.code, ...err.meta })))
  }
}

/**
 * Logs an execption. If Sentry is configured
 * sends the error information there. Otherwise
 * prints the error to the console.
 *
 * @param {Error} e Error that occurred
 * @param {String} code Error code
 * @param {Object} data Additional data to be sent to Sentry
 */
export const error = (e, code, data) => {
  const apiErrors = responseApiErrorInfo(e)
  if (config.sentryDsn) {
    const extra = { ...data, apiErrorData: apiErrors }

    Sentry.withScope((scope) => {
      scope.setTag('code', code)
      Object.keys(extra).forEach((key) => {
        scope.setExtra(key, extra[key])
      })
      Sentry.captureException(e)
    })

    printAPIErrorsAsConsoleTable(apiErrors)
  } else {
    console.error(e)
    console.error('Error code:', code, 'data:', data)
    printAPIErrorsAsConsoleTable(apiErrors)
  }
}
