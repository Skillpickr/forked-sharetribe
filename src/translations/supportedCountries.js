// Add here the translations of the country names using key "<language_code>: 'transalation'" e.g. fi: 'Afganistan'
// prettier-ignore
const supportedCountryCodes = [
  { code: 'DK',
  locale: 'da',
    domain: "dk", 
    en: {country: 'Denmark', language: 'Danish'}, 
    da: {country: 'Danmark', language: 'Dansk'}},
  {
    code: 'US',
    locale: 'en',
    domain: 'com', 
    en: {country: 'United States', language: 'English'},
    da: {country: 'Amerikas Forenede Stater', language: 'Engelsk'}}
]

const getSupportedCountryCodes = (lang) => {
  // Add the lnew locale here so that the correct translations will be returned.
  // If locale is unknown or the translation is missing, this will default to english coutnry name.
  const codes = supportedCountryCodes.map((c) => {
    const countryName = c[lang].country ? c[lang].country : c['en']
    const countryLanguage = c[lang].language ? c[lang].language : c['en']
    const countryDomain = c.domain
    const countryLocale = c.locale
    const counryCode = c.code

    return {
      code: counryCode,
      locale: countryLocale,
      country: countryName,
      language: countryLanguage,
      domain: countryDomain
    }
  })
  return codes
}

export default getSupportedCountryCodes
