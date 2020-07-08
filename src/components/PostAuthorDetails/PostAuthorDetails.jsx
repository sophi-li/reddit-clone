import React from "react";
import moment from "moment";

import styles from "./PostAuthorDetails.module.css";

const PostAuthorDetails = ({ subreddit, username, time }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.subreddit}>r/{subreddit}</div>
        <div className={styles.username}>Posted by u/{username}</div>
        <div className={styles.time}>{moment.unix(time).fromNow()}</div>
        <button className={styles.joinBtn}>+ JOIN</button>
      </div>
    </div>
  );
};

export default PostAuthorDetails;
