/**
 * Creates a sortable image grid with children added to the end of the created grid.
 *
 * Example:
 * // images = [{ id: 'tempId', imageId: 'realIdFromAPI', file: File }];
 * <AddImages images={images}>
 *   <input type="file" accept="images/*" onChange={handleChange} />
 * </AddImages>
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ImageFromFile, ResponsiveImage, IconSpinner } from '../../components'

import css from './AddImages.module.css'
import RemoveImageButton from './RemoveImageButton'
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'

import { Grid } from './Grid'
import SortablePhoto from './SortablePhoto'
import Photo from './Photo'

const ThumbnailWrapper = (props) => {
  const { className, image, savedImageAltText, onRemoveImage } = props
  const handleRemoveClick = (e) => {
    e.stopPropagation()
    onRemoveImage(image.id)
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
      <ImageFromFile id={image.id} className={className} rootClassName={css.thumbnail} file={image.file}>
        {removeButton}
        {uploadingOverlay}
      </ImageFromFile>
    )
  } else {
    const classes = classNames(css.thumbnail, className)
    return (
      <div className={classes}>
        <div className={css.threeToTwoWrapper}>
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
      </div>
    )
  }
}

ThumbnailWrapper.defaultProps = { className: null }

const { array, func, node, string, object } = PropTypes

ThumbnailWrapper.propTypes = {
  className: string,
  image: object.isRequired,
  savedImageAltText: string.isRequired,
  onRemoveImage: func.isRequired
}

const AddImages = (props) => {
  const { children, className, thumbnailClassName, images, savedImageAltText, onRemoveImage } = props
  const classes = classNames(css.root, className)
  const [activeId, setActiveId] = useState(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function moveArray(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
      var k = newIndex - arr.length + 1
      while (k--) {
        arr.push(undefined)
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
    return arr
  }

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      moveArray(images, images.indexOf(active.id), images.indexOf(over.id))
    }

    setActiveId(null)
  }

  function handleDragCancel() {
    setActiveId(null)
  }

  return (
    <div className={classes}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}>
        <SortableContext items={images} strategy={rectSortingStrategy}>
          <Grid columns={3}>
            {images.map((image, index) => (
              <SortablePhoto
                image={image}
                index={index}
                key={image.id.uuid || image.id}
                className={thumbnailClassName}
                savedImageAltText={savedImageAltText}
                onRemoveImage={onRemoveImage}
              />
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo
              className={thumbnailClassName}
              image={activeId}
              index={images.indexOf(activeId)}
              savedImageAltText={savedImageAltText}
              onRemoveImage={onRemoveImage}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
      {/* {images.map((image, index) => {
        return (
          <ThumbnailWrapper
            image={image}
            index={index}
            key={image.id.uuid || image.id}
            className={thumbnailClassName}
            savedImageAltText={savedImageAltText}
            onRemoveImage={onRemoveImage}
          />
        )
      })} */}
      {children}
    </div>
  )
}

AddImages.defaultProps = { className: null, thumbnailClassName: null, images: [] }

AddImages.propTypes = {
  images: array,
  children: node.isRequired,
  className: string,
  thumbnailClassName: string,
  savedImageAltText: string.isRequired,
  onRemoveImage: func.isRequired
}

export default AddImages
