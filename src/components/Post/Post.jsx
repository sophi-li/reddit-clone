import React, { useState, useEffect } from 'react'

import PostText from '../PostText'
import PostAuthorDetails from '../PostAuthorDetails'
import PostSocial from '../PostSocial'

import styles from './Post.module.css'

const Post = ({ subreddit }) => {
  const [redditData, setRedditData] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    setRedditData([])

    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => res.json())
      .then((json) => setRedditData(json.data.children))
      .finally(setIsLoading(false))
      .catch((error) => {
        setError(error)
      })
  }, [subreddit, setRedditData])

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Can't find {subreddit}</div>
      ) : (
        <div>
          {redditData.map((element) => (
            <div className={styles.postContainer} key={element.data.url}>
              <PostAuthorDetails
                subreddit={element.data.subreddit}
                username={element.data.author}
                time={element.data.created}
              />
              <a
                className={styles.url}
                href={element.data.url}
                target="__blank"
              >
                <PostText title={element.data.title} />
              </a>
              <PostSocial
                upvotes={element.data.score}
                comments={element.data.num_comments}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Post
