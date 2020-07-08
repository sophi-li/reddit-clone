import React from 'react'

import styles from './PostText.module.css'

const PostText = ({ title, postText, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title} </div>
      <div>{postText}</div>
    </div>
  )
}

export default PostText
