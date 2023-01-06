import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './Logo.module.css'
import MobileLogoImage from './logo_transparent_background.png'
import DesktopLogoImage from './logo_transparent_background.png'
import WhiteLogoImage from './white_logo_transparent_background.png'
import config from '../../config'

const Logo = (props) => {
  const { className, format, isWhite, ...rest } = props
  const isMobile = format !== 'desktop'
  const classes = classNames(className, { [css.logoMobile]: isMobile })
  const logoImage = isMobile ? MobileLogoImage : DesktopLogoImage
  // overwrites responsive logo
  const whiteLogo = isWhite ? WhiteLogoImage : logoImage

  return <img className={classes} src={whiteLogo} alt={config.siteTitle} {...rest} />
}

const { oneOf, string } = PropTypes

Logo.defaultProps = {
  className: null,
  format: 'desktop'
}

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile'])
}

export default Logo
