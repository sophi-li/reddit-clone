import React from 'react'

import upArrow from './up-arrow.svg'
import downArrow from './down-arrow.svg'

import styles from './PostSocial.module.css'

const PostSocial = ({ upvotes, comments }) => {
  return (
    <div className={styles.container}>
      <div className={styles.upvoteContainer}>
        <img className={styles.upBtn} src={upArrow} alt="upvote button" />
        <div className={styles.upvotes}>{upvotes}</div>
        <img className={styles.downBtn} src={downArrow} alt="downvote button" />
      </div>
      <div className={styles.comments}>{comments} comments</div>
      <div className={styles.share}>share</div>
      <div className={styles.save}>save</div>
    </div>
  )
}

export default PostSocial
