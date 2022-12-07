import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import config from '../../config'

import { NamedLink, Button, PrimaryButton, SecondaryButton, ExternalLink } from '../../components'

import css from './SectionWhatIs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionWhatIs = (props) => {
  const { rootClassName, className } = props
  const { siteHelpCenter } = config
  const readOurStory = (
    <NamedLink name="AboutPage">
      <FormattedMessage id="SectionWhatIs.goToAbout" />
    </NamedLink>
  )

  const classes = classNames(rootClassName || css.root, className)
  return (
    <div className={classes}>
      <div className={css.sectionTitle}>
        <h2 className={css.title}>
          <FormattedMessage id="SectionWhatIs.titleLineOne" />
        </h2>
        <p className={css.textMuted}>
          <FormattedMessage id="SectionWhatIs.titleLineTwo" values={{ readOurStory }} />
        </p>
      </div>
      <div className={css.steps}>
        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIs.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionWhatIs.part1Text" values={{ tooltipLink: '' }} />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIs.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionWhatIs.part2Text" />
          </p>
        </div>

        <div className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionWhatIs.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionWhatIs.part3Text" />
          </p>
        </div>
      </div>
      <h3 className={css.helpText}>
        <FormattedMessage id="SectionWhatIs.haveQuestion" />
      </h3>
      <ExternalLink className={css.helpButton} href={siteHelpCenter} >
        <FormattedMessage id="SectionWhatIs.goToHelpCenter" />
      </ExternalLink>

      {/* TODO: Make newsletter */}
    </div>
  )
}

SectionWhatIs.defaultProps = { rootClassName: null, className: null }

const { string } = PropTypes

SectionWhatIs.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionWhatIs
