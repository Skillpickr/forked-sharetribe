/**
 * Creates a sortable image grid with children added to the end of the created grid.
 *
 * Example:
 * // images = [{ id: 'tempId', imageId: 'realIdFromAPI', file: File }];
 * <AddImages images={images}>
 *   <input type="file" accept="images/*" onChange={handleChange} />
 * </AddImages>
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ImageFromFile, ResponsiveImage, IconSpinner } from '../../components'

import css from './AddImages.module.css'
import RemoveImageButton from './RemoveImageButton'
import { DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable'

import { Grid } from './Grid'
import SortablePhoto from './SortablePhoto'
import Photo from './Photo'

const { array, func, node, string, object } = PropTypes

const AddImages = (props) => {
  const { children, className, thumbnailClassName, images, savedImageAltText, onRemoveImage } = props
  const classes = classNames(css.root, className)
  const [activeId, setActiveId] = useState(null)
  const [items, setItems] = useState(images)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  useEffect(() => {
    setItems([...images])
  }, [images])

  console.log('activeID', activeId)

  return (
    <div className={classes}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}>
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={2}>
            {items.map((image, index) => (
              <SortablePhoto
                image={image}
                index={index}
                key={index}
                className={classNames(thumbnailClassName)}
                savedImageAltText={savedImageAltText}
                onRemoveImage={onRemoveImage}
              />
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo image={activeId} index={items.indexOf(activeId)} savedImageAltText={savedImageAltText} />
          ) : null}
        </DragOverlay>
      </DndContext>
      {children}
    </div>
  )
  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  function handleDragCancel() {
    setActiveId(null)
  }
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
