import React from 'react'
import { useSortable, defaultAnimateLayoutChanges } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'

import Photo from './Photo'

const SortablePhoto = (props) => {
  const { thumbnailClassName, savedImageAltText, onRemoveImage, image } = props
  const animateLayoutChanges = (args) => defaultAnimateLayoutChanges({ ...args, wasDragging: true })
  const sortable = useSortable({ animateLayoutChanges, id: image })
  const { attributes, listeners, isDragging, setNodeRef, transform, transition } = sortable

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <Photo
      className={thumbnailClassName}
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
      savedImageAltText={savedImageAltText}
      onRemoveImage={onRemoveImage}
    />
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
