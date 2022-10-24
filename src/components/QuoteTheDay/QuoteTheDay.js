import React, { useEffect, useState } from 'react'
import { string, object } from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { NamedLink } from '../../components'
import { locationBounds } from '../LocationAutocompleteInput/GeocoderMapbox'
import css from './QuoteTheDay.module.css'
import { userLocation } from '../../util/maps'
import config from '../../config'
import { stringify } from '../../util/urlHelpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import quotes from '../../util/quotes'

const SectionHero = (props) => {
  //   const { rootClassName, className } = props.className

  //   const classes = classNames(rootClassName || css.root, className)
  const [quotation, setQuote] = useState({ quote: quotes[0].quote, author: quotes[0].author })

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length)
    return quotes[randomNumber]
  }
  const shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const generateRandomQuote = randomQuote()
    setTimeout(() => {
      setQuote({
        quote: generateRandomQuote.quote,
        author: generateRandomQuote.author
      })
    }, 0)
  }, [])

  return (
    <div className={css.parent}>
      <div className={css.box}>
        <FontAwesomeIcon icon="fa-solid fa-quote-left" className={classNames(css.fas, css.fa2)} />
        <div className={css.text}>
          <FontAwesomeIcon icon="fa-solid fa-quote-right" className={classNames(css.fas, css.fa1)} />
          <div>
            <h3>Quote of the day</h3>
            <p>{quotation.quote}</p>
            <p>-{quotation.author ? quotation.author : 'Unknown'}-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

SectionHero.defaultProps = { rootClassName: null, className: null }

SectionHero.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionHero
