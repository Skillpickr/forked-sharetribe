import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'

import { NamedLink } from '../../components'

import css from './SectionHowItWorks.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionHowItWorks = (props) => {
  const { rootClassName, className } = props

  const classes = classNames(rootClassName || css.root, className)
  return (
    <div className={classes}>
      <div className={css.sectionTitle}>
        <h2 className={css.title}>
          <FormattedMessage id="SectionHowItWorks.titleLineOne" />
        </h2>
        <p className={css}>
          <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
        </p>
      </div>

      <div className={css.steps}>
        <div className={css.step}>
          <div
            className={classNames(
              css.card,
              css.border0,
              css.textCenter,
              css.features,
              css.featurePrimary,
              css.featureClean
            )}>
            <div className={classNames(css.icons, css.mxAuto)}>
              <div className={classNames(css.mb0, css.dBlock, css.roundedMd, css.mt4)}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={css.icon} />
              </div>
            </div>
            <div className={classNames(css.content, css.mt4, css.pt2)}>
              <h3 className={classNames(css.heading, css.mb3)}>
                <FormattedMessage id="SectionHowItWorks.part1Title" />
              </h3>
              <p className={classNames(css.textMuted, css.flexible)}>
                <FormattedMessage id="SectionHowItWorks.part1Text" />
              </p>
            </div>
          </div>
        </div>

        <div className={css.step}>
          <div
            className={classNames(
              css.card,
              css.border0,
              css.textCenter,
              css.features,
              css.featurePrimary,
              css.featureClean
            )}>
            <div className={classNames(css.icons, css.mxAuto)}>
              <div className={classNames(css.mb0, css.dBlock, css.roundedMd, css.mt4)}>
                <FontAwesomeIcon icon="fa-solid fa-credit-card" className={css.icon} />
              </div>
            </div>

            <div className={classNames(css.content, css.mt4, css.pt2)}>
              <h3 className={classNames(css.heading, css.mb3)}>
                <FormattedMessage id="SectionHowItWorks.part2Title" />
              </h3>
              <p className={classNames(css.textMuted, css.flexible)}>
                <FormattedMessage id="SectionHowItWorks.part2Text" />
              </p>
            </div>
          </div>
        </div>

        <div className={css.step}>
          <div
            className={classNames(
              css.card,
              css.border0,
              css.textCenter,
              css.features,
              css.featurePrimary,
              css.featureClean
            )}>
            <div className={classNames(css.icons, css.mxAuto)}>
              <div className={classNames(css.mb0, css.dBlock, css.roundedMd, css.mt4)}>
                <FontAwesomeIcon icon="fa-solid fa-comment" className={css.icon} />
              </div>
            </div>
            <div className={classNames(css.content, css.mt4, css.pt2)}>
              <h3 className={classNames(css.heading, css.mb3)}>
                <FormattedMessage id="SectionHowItWorks.part3Title" />
              </h3>
              <p className={classNames(css.textMuted, css.flexible)}>
                <FormattedMessage id="SectionHowItWorks.part3Text" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div> */}
    </div>
  )
}

SectionHowItWorks.defaultProps = { rootClassName: null, className: null }

const { string } = PropTypes

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string
}

export default SectionHowItWorks
