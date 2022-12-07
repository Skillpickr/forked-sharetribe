import React from 'react'
import { useSortable, defaultAnimateLayoutChanges } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'

import Photo from './Photo'
import customCSS from './AddImages.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SortablePhoto = (props) => {
  const { thumbnailClassName, savedImageAltText, onRemoveImage, image, index } = props
  const sortable = useSortable({ id: image })
  const { attributes, listeners, isDragging, setNodeRef, transform, transition } = sortable

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    gridColumnStart: index === 0 ? 'span 2' : null,
    border: index === 0 ? 'solid lightgrey 2px' : null,
    paddingLeft: index === 0 ? 16 : null,
    paddingRight: index === 0 ? 16 : null
  }

  const inlineStyles = {}

  return (
    <div className={thumbnailClassName} style={style} {...attributes}>
      {index === 0 && <h4 className={customCSS.coverPhotoText}>Thumbnail</h4>}
      <Photo
        ref={setNodeRef}
        {...props}
        style={inlineStyles}
        savedImageAltText={savedImageAltText}
        onRemoveImage={onRemoveImage}
      />
      {!image.file && (
        <button className={customCSS.gridItem} {...listeners}>
          <FontAwesomeIcon icon="fa-solid fa-up-down-left-right" size="2x" />
        </button>
      )}
    </div>
  )
}

SortablePhoto.defaultProps = { className: null }

const { array, func, node, string, object } = PropTypes

SortablePhoto.propTypes = {
  className: string,
  image: object.isRequired,
  savedImageAltText: string.isRequired,
  onRemoveImage: func.isRequired
}
export default SortablePhoto
