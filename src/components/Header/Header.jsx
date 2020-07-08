import React, { useState } from 'react'
import logo from './reddit.png'

import Container from '../Container'
import Post from '../Post'

import styles from './Header.module.css'

const Header = () => {
  const [inputValue, setInputValue] = useState('reactjs')
  const [subreddit, setSubreddit] = useState(inputValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubreddit(inputValue)
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={logo} alt="reddit logo" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="searchInput">
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search"
              onChange={handleOnChange}
            />
          </label>
        </form>

        <button className={styles.loginBtn}>LOG IN</button>
        <button className={styles.signupBtn}>SIGN UP</button>
      </div>

      <Container>
        <Post subreddit={subreddit} />
      </Container>
    </div>
  )
}
export default Header
