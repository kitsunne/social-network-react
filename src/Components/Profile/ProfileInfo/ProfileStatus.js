import React, { useEffect, useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div className={styles.status}>
          <span onDoubleClick={activateEditMode}>
            {status || "no status yet"}
          </span>
        </div>
      )}
      {editMode && (
        <div className={styles.editMode}>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
