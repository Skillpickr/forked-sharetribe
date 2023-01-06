import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'
import classNames from 'classnames'
import css from './Hero.module.css'
import Logo from '../Logo/Logo'



const Hero = (props) => {
    const { rootClassName, className, image, title, subTitle } = props
    const classes = classNames(rootClassName || css.root, className)



    return (

        <div>
            {/* Start Home */}
            <section
                className={classNames(css.bgHalf170)}
                style={{ background: `url(${image}) center` }}
            >
                <div className={classNames(css.bgOverlay, css.bgGradientOverlay2)}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="xs">
                            <div className="title-heading text-center">
                                <Logo className="img-fluid logo-50" isWhite />
                                {subTitle && <p className="text-white-50 para-desc mx-auto mb-0">
                                    {subTitle}
                                </p>}
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}

                    {/* <div className={css.positionMiddleBottom}>
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul
                                className="breadcrumb breadcrumb-muted mb-0 p-0"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <li className="breadcrumb-item">
                                    <a
                                        href="/index"
                                        onClick={e => {
                                            e.preventDefault()
                                        }}
                                    >
                                        Superex
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About us
                                </li>
                            </ul>
                        </nav>
                    </div> */}
                </div>
                {/*end container*/}
            </section>
            {/*end section*/}
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </div></div>
    )
}



const { array, func, number, shape, string } = PropTypes

Hero.defaultProps = {
    rootClassName: null,
    className: null
}
Hero.propTypes = {
    rootClassName: string,
    className: string
}

export default Hero