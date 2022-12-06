/* eslint-disable no-undef */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from '../../util/reactIntl'
import classNames from 'classnames'
import { lazyLoadWithDimensions } from '../../util/contextHelpers'

import { NamedLink } from '..'

import css from './SectionCategories.module.css'

import creativeImage from './images/creative_Fotor.jpg'
import knowledgeImage from './images/knowledge_Fotor.jpg'
import performanceImage from './images/performance_Fotor.jpg'
import mediaImage from './images/media_Fotor.jpg'
import { findOptionsForSelectFilter } from '../../util/search'
import config from '../../config'
import * as custom from '../../marketplace-custom-config.js'

//Knowledge Photo by mentatdgt from Pexels
// Media Photo by Lê Minh from Pexels
// Performance Photo by Yan Krukov from Pexels
// Creative Photo by Jordan Benton from Pexels

class CategoryImage extends Component {
  render() {
    const { alt, ...rest } = this.props
    return <img alt={alt} {...rest} />
  }
}
const LazyImage = lazyLoadWithDimensions(CategoryImage)

const categoryLink = (title, image, searchQuery, isComingSoon) => {
  const nameText = <span className={css.categoryName}>{title}</span>
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.category} disabled={isComingSoon}>
      <div className={classNames(css.linkText, { [css.comingSoon]: isComingSoon })}>
        <img src={image} alt={title} className={css.profilePic} />
        <FormattedMessage id="SectionCategories.categories" values={{ category: nameText }} />
      </div>
    </NamedLink>
  )
}

const SectionCategories = (props) => {
  const { rootClassName, className, filterConfig, user } = props

  // TODO: Change the categories to generic by inserting the const categories in the below return statement
  const classes = classNames(rootClassName || css.root, className)
  const categoryKey = 'category'
  const categoryList = findOptionsForSelectFilter(categoryKey, filterConfig)
  // console.log(categoryList);
  const categories = () => {
    if (categoryList) {
      for (category in categoryList) {
        return categoryLink(
          category.label,
          'test',
          './images/' + category.key + '.jpg',
          '?pub_category=' + category.key,
          false
        )
      }
    }
  }
  const displayUserName = user ? user.attributes.profile.firstName : null
  const displayHeading = user ? (
    <FormattedMessage id="SectionCategories.titleWithName" values={{ displayName: displayUserName }} />
  ) : (
    <FormattedMessage id="SectionCategories.title" />
  )

  return (
    <div className={classes}>
      <div className={css.background}>
        <div className={css.title}>{displayHeading}</div>
        <div className={css.categories}>
          {/* {categories} */}
          {categoryLink('Performance & Entertainment', performanceImage, '?pub_category=performance', false)}
          {/* {categoryLink('Performance & Entertainment',performanceImage,'?pub_category=p-and-e',true)} */}
          {categoryLink('Creative', creativeImage, '?pub_category=creative', false)}
          {/* {categoryLink('Creative', creativeImage, '?pub_category=creative', false)} */}
          {categoryLink('Knowledge', knowledgeImage, '?pub_category=knowledge', true)}
          {categoryLink('Audio Production', mediaImage, '?pub_category=audio-prod', true)}
        </div>
      </div>

      <div className={css.categories}></div>
    </div>
  )
}

SectionCategories.defaultProps = { rootClassName: null, className: null }

const { string } = PropTypes

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
  filterConfig: PropTypes.array
}

SectionCategories.defaultProps = {
  filterConfig: custom.filters
}

export default SectionCategories
