import React from 'react'
import css from './AddImages.module.css'
export function Grid({ children, columns }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        padding: 10,
        width: '100%'
      }}
      className={css.photoGrid}>
      {children}
    </div>
  )
}
