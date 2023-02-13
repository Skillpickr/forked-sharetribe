import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './Teams.module.css'
import client01 from './client01.jpeg'
import client02 from './client02.jpeg'
import client03 from './antonio.jpeg'
import about from './about.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl'
import { compose } from 'redux'

const Teams = (props) => {
  const { rootClassName, className, intl } = props
  const classes = classNames(rootClassName || css.root, className)

  const cilleDescription = intl.formatMessage({
    id: 'Teams.founding.cille'
  })

  const allanDescription = intl.formatMessage({
    id: 'Teams.founding.allan'
  })

  const antonioDescription = intl.formatMessage({
    id: 'Teams.founding.antonio'
  })

  const clientRecord = [
    {
      image: client01,
      name: 'Cæcilie Fundal Månsson',
      position: 'CEO & CO-Founder',
      linkedin: 'https://www.linkedin.com/in/caeciliefundalmaansson/',
      email: 'cfm@skillpickr.com',
      phone: '+4522462408',
      description: cilleDescription
    },
    {
      image: client02,
      name: 'Allan Asp Christensen',
      position: 'CTO & CO-Founder',
      linkedin: 'https://www.linkedin.com/in/allanaspchristensen/',
      email: 'aac@skillpickr.com',
      phone: '+4520778329',
      description: allanDescription
    },
    {
      image: client03,
      name: 'Antonio Rosado',
      position: 'Business Coach & CO-Founder',
      linkedin: 'https://www.linkedin.com/in/antoniohanckerosado/',
      email: '',
      phone: '',
      description: antonioDescription
    }
  ]

  // prettier-ignore
  return (
    <div className={classes}>
      <section className="section">
        {/* <div className="container ">
          <h1 className="title text-center">
            <FormattedMessage id="TeamsPage.heading" />
          </h1>
          <div className="row align-items-center">
            <div className="lg">
              <div className="about-image position-relative">
                <img src={about} className="img-fluid rounded shadow" alt="" />
              </div>
            </div>
            <div className="xl mt4 pt2">
              <div className="section-title ms-lg-5">
                <h6 className="text-primary fw-normal">
                  <FormattedMessage id="Teams.mission.title" />
                </h6>
                <h2 className="title mb4">
                  <FormattedMessage id="Teams.mission.subTitle" values={{ breakline: <br /> }} />
                </h2>
                <p className="text-muted mb0">
                  <FormattedMessage id="Teams.mission.text" />
                </p>
              </div>
            </div>
          </div>
        </div> */}


        {/* <div className="container  section-content">
          <div className="row xs-justify-center">
            <div className="xl">
              <div className="row">
                <div className="sm">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb0 display-5 fw-bold title-dark mt2">
                      $
                      <span className="counter-value" data-target="40">
                        3
                      </span>
                      M
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      Trading volume
                    </span>
                  </div>
                </div>
                <div className="sm">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb0 display-5 fw-bold title-dark mt2">
                      <span className="counter-value" data-target="200">
                        1
                      </span>
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      Listings created
                    </span>
                  </div>
                </div>
                <div className="sm">
                  <div className="counter-box position-relative text-center">
                    <h4 className="mb0 display-5 fw-bold title-dark mt2">
                      <span className="counter-value" data-target="234">
                        100
                      </span>
                      K
                    </h4>
                    <span className="counter-head fw-semibold text-muted title-dark">
                      Total users
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div > */}

        <div className="container" >
          <div className="row xs-justify-center">
            <div className="md">
              <div className="section-title text-center mb4 pb2">
                <h1 className="mb4">
                  <FormattedMessage id="Teams.founding.title" />
                </h1>
                <p className="text-muted para-desc mb0 mx-auto">
                  <FormattedMessage id="Teams.mission.text" />
                  {/* <FormattedMessage id="Teams.founding.text" values={{ breakline: <br /> }} /> */}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {clientRecord?.map(client => (
              <div
                className="sm"
                key={client?.name}
              >
                <div className="card team team-primary text-center">
                  <div className="card-img team-image d-inline-block mx-auto rounded-pill shadow avatar avatar-ex-large overflow-hidden">
                    <img src={client?.image} className="img-fluid" alt="" />
                    <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                    <ul className="list-unstyled team-social mb0">
                      <li className="list-inline-item">
                        <a href={client?.linkedin} className="btn btn-sm btn-pills btn-icon" target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />                        </a>
                      </li>
                    </ul>
                    {/*end icon*/}
                  </div>

                  <div className="content mt3">
                    <p className="text-dark h6 mb0 title d-block">
                      {client?.name}
                    </p>
                    <small className="text-muted mb0 fw-normal">
                      {client?.position}
                    </small>
                    <ul className="list-unstyled team-social mb0">
                      {client?.email && <li className="list-inline-item">
                        <a href={"mailto:" + client.email} className="btn btn-sm btn-pills btn-icon">
                          <FontAwesomeIcon icon="fa-solid fa-envelope" />                        </a>
                      </li>}
                      {client?.phone && <li className="list-inline-item ml2">
                        <a href={"tel:" + client.phone} className="btn btn-sm btn-pills btn-icon">
                          <FontAwesomeIcon icon="fa-solid fa-phone" />                        </a>
                      </li>}
                    </ul>
                    {/* <p className="text-muted mb0">{client?.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*end row*/}
        </div >
        {/*end container*/}

      </section >
      {/*end section*/}
    </div >
  )
}

Teams.defaultProps = {
  rootClassName: null,
  className: null
}

const { string } = PropTypes

Teams.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired
}
export default compose(injectIntl)(Teams)
