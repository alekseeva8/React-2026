import React, { useEffect } from "react";
import * as styles from "./styles";
import { Activity } from "../../features/login-redux/activitySlice";

export type RequestProps = {
  activity: Activity;
  onRequestActivity: () => void;
};

const ActivityView = ({ activity, onRequestActivity }: RequestProps) => {
  const activityData = activity.data;
  const loading = activity.loading;
  const error = activity.error;

  useEffect(() => {
    onRequestActivity();
  }, []);

  return (
    <>
      <div style={styles.mainContainer}>
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>{`Error: ${error}`}</h3>
        ) : activityData ? (
          <>
            <h3>{activityData?.title}</h3>
            <p>{activityData?.body}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ActivityView;
