import React from "react";
import styles from "./usersPage.module.css";
import * as axios from "axios";
import userPhoto from "../../../assets/images/user.png";

class UsersPage extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (
      let i = Math.max(this.props.currentPage - 4, 1);
      i <= Math.max(1, Math.min(this.props.currentPage + 4, pagesCount));
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
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
        <div>
          {this.props.users.map((u) => (
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
                        this.props.unFollow(u.id);
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}

export default UsersPage;
