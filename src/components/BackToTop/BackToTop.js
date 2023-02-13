import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import css from './BackToTop.module.css'
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    e.preventDefault()
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div>
      {isVisible && (
        <a href="" onClick={scrollToTop} id="back-to-top" className={css.backToTop}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-up" size="2x" />
        </a>
      )}
    </div>
  )
}

export default BackToTop
