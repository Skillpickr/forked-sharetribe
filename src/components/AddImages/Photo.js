// /* eslint-disable react/display-name */
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { ImageFromFile, ResponsiveImage, IconSpinner } from '../../components'

import css from './AddImages.module.css'
import RemoveImageButton from './RemoveImageButton'

const Photo = React.forwardRef(
  ({ className, image, savedImageAltText, onRemoveImage, index, faded, style, listeners, ...props }, ref) => {
    const handleRemoveClick = (e) => {
      e.stopPropagation()
      onRemoveImage(image.id)
    }
    const inlineStyles = {
      opacity: faded ? '0.2' : '1',
      transformOrigin: '0 0',
      height: index === 0 ? 'auto' : '100%',
      gridRowStart: index === 0 ? 'span 2' : null,
      gridColumnStart: index === 0 ? 'span 2' : null,
      curser: 'pointer',
      ...style
    }
    if (image.file) {
      // Add remove button only when the image has been uploaded and can be removed
      const removeButton = image.imageId ? <RemoveImageButton onClick={handleRemoveClick} /> : null

      // While image is uploading we show overlay on top of thumbnail
      const uploadingOverlay = !image.imageId ? (
        <div className={css.thumbnailLoading}>
          <IconSpinner />
        </div>
      ) : null

      return (
        <ImageFromFile
          id={image.id}
          className={className}
          rootClassName={css.thumbnail}
          style={inlineStyles}
          file={image.file}>
          {removeButton}
          {uploadingOverlay}
        </ImageFromFile>
      )
    } else {
      const classes = classNames(css.thumbnail, className)
      return (
        <div className={classes} ref={ref} style={inlineStyles} {...props}>
          <div className={css.aspectWrapper}>
            <ResponsiveImage
              rootClassName={css.rootForImage}
              image={image}
              alt={savedImageAltText}
              variants={['landscape-crop', 'landscape-crop2x']}
            />
          </div>
          <RemoveImageButton onClick={handleRemoveClick} />
        </div>
      )
    }
  }
)

Photo.displayName = 'Photo'
Photo.defaultProps = { className: null }

const { array, func, node, string, object } = PropTypes

Photo.propTypes = {
  className: string,
  image: object.isRequired,
  savedImageAltText: string.isRequired,
  onRemoveImage: func.isRequired
}
export default Photo
