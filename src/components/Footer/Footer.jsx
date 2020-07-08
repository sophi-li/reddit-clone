import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.clone}>Clone of Reddit</div>
      <div className={styles.sourcecode}>
        <a className={styles.sourcecodeLink} href="https://github.com/sophi-li">
          Source Code
        </a>
      </div>
    </div>
  )
}

export default Footer
