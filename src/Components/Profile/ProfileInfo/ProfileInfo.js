import React from "react";
import Loader from "../../Common/Loader";
import styles from "./ProfileInfo.module.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaVk,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeaderData}>
        <div className={styles.profileMainData}>
          <div className={styles.profileAvatarContainer}>
            {props.profile.photos.large ? (
              <img
                className={styles.profileAvatar}
                src={props.profile.photos.large}
                alt="profile-avatar"
              />
            ) : (
              <img
                className={styles.profileAvatar}
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                alt="profile-avatar"
              ></img>
            )}
          </div>
          <div className={styles.profileNameContainer}>
            <h1 className={styles.profileName}>{props.profile.fullName}</h1>
            <div className={styles.descriptionBlock}>
              <p>
                <strong>Looking for a job: </strong>
                {(props.profile.lookingForAJob = true ? "Yes" : "No")}
              </p>
              {props.profile.lookingForAJobDescription ? (
                <p>
                  <strong>Job description: </strong>{" "}
                  {props.profile.lookingForAJobDescription}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.contactsBlock}>
          {props.profile.contacts ? (
            <div className={styles.contactsList}>
              {props.profile.contacts.website ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.website}>
                    <CgWebsite className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
              {props.profile.contacts.twitter ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.twitter}>
                    <FaTwitter className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
              {props.profile.contacts.instagram ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.instagram}>
                    <FaInstagram className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
              {props.profile.contacts.github ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.github}>
                    <FaGithub className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
              {props.profile.contacts.facebook ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.facebook}>
                    <FaFacebook className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
              {props.profile.contacts.vk ? (
                <div className={styles.contactsItem}>
                  <a href={props.profile.contacts.vk}>
                    <FaVk className={styles.socialIcon} />
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            "no info"
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
