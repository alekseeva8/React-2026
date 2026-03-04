import React from "react";
import ActivityView from "../views/Activity/index";
import { RequestProps } from "../views/Activity/index";
import { fetchRequested } from "../features/login-redux/activitySlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const ActivityContainer = () => {
  const activity = useAppSelector((state) => state.activity.value);
  const dispatch = useAppDispatch();

  const handleRequest = () => {
    const id = 1;
    dispatch({ type: fetchRequested.type, payload: { id } });
  };

  const props: RequestProps = {
    activity: activity,
    onRequestActivity: handleRequest,
  };

  return <ActivityView {...props} />;
};

export default ActivityContainer;
