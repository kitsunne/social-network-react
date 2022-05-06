import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (
    let i = Math.max(props.currentPage - 4, 1);
    i <= Math.max(1, Math.min(props.currentPage + 4, pagesCount));
    i++
  ) {
    pages.push(i);
  }
  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      <div className={styles.pagination}>
        {pages.map((p) => {
          return (
            <button
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </button>
          );
        })}
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id} className={styles.userContainer}>
            <div className={styles.imageContainer}>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </div>
              <div className={styles.buttonContainer}>
                {u.followed ? (
                  <button
                    className={styles.button}
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.mainInfoContainer}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
              </div>
              <div className={styles.location}>
                <div>{"u.location.city"},</div>
                <div>{"u.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
