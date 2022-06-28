import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../assets/images/user.webp";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={styles.userPhoto}
                  />
                </NavLink>
              </div>
              <div className={styles.buttonContainer}>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={styles.followButton}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            baseURL:
                              "https://social-network.samuraijs.com/api/1.0/users",
                            headers: {
                              "API-KEY": "5ae6a172-bcb6-4f46-826d-8b775acdebe4",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.unFollow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);
                        });
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    className={styles.unFollowButton}
                    onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            baseURL:
                              "https://social-network.samuraijs.com/api/1.0/users",
                            headers: {
                              "API-KEY": "5ae6a172-bcb6-4f46-826d-8b775acdebe4",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false, u.id);
                        });
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
                <div>
                  <strong>ID:</strong> {u.id},
                </div>
                <div> {"u.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
