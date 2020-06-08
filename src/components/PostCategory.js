import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import styles from './PostTags.module.scss'

const PostCategories = ({ categories }) => {
  return (
    <div className={styles.categoriesContainer}>
      {categories &&
        categories.map(category => (
          <Link key={category} to={`/categories/${category}`}>
            <span>{category}</span>
          </Link>
        ))}
    </div>
  )
}

export default PostCategories
