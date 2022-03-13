import React from "react";
import styles from "./usersPage.module.css";

const UsersPage = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://gazmasters.ru/wp-content/uploads/2021/02/klipartz.com-6.png",
        fullName: "Xenos",
        status: "μη διστάσετε να με κουβεντιάσετε",
        location: {
          city: "Athens",
          country: "Greece",
        },
        followed: false,
      },
      {
        id: 2,
        photoUrl:
          "https://gazmasters.ru/wp-content/uploads/2021/02/klipartz.com-6.png",
        fullName: "Oliver",
        status: "chat gjerne med meg :)",
        location: {
          city: "Oslo",
          country: "Norway",
        },
        followed: true,
      },
      {
        id: 3,
        photoUrl:
          "https://gazmasters.ru/wp-content/uploads/2021/02/klipartz.com-6.png",
        fullName: "Ezume",
        status: "お気軽にチャットしてください",
        location: {
          city: "Tokio",
          country: "Japan",
        },
        followed: false,
      },
      {
        id: 4,
        photoUrl:
          "https://gazmasters.ru/wp-content/uploads/2021/02/klipartz.com-6.png",
        fullName: "Hugo",
        status: "chatta gärna med mig",
        location: {
          city: "Stockholm",
          country: "Sweden",
        },
        followed: true,
      },
    ]);
  }
  return (
    <>
      <h1>Users</h1>
      <div className={styles.wrapper}>
        {props.users.map((u) => (
          <div key={u.id} className={styles.userContainer}>
            <div className={styles.imageContainer}>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto} />
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
                <div className={styles.name}>{u.fullName}</div>
                <div className={styles.status}>{u.status}</div>
              </div>
              <div className={styles.location}>
                <div>{u.location.city},</div>
                <div>{u.location.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
