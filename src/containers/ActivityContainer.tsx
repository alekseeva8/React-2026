import React from "react";
import ActivityView from "../views/Activity/index";
import { fetchRequested } from "../features/login-redux/activitySlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const ActivityContainer = () => {
  const activity = useAppSelector((state) => state.activity.value);
  const dispatch = useAppDispatch();

  const handleRequest = () => {
    const id = 1;
    dispatch({ type: fetchRequested.type, payload: { id } });
  };

  return <ActivityView activity={activity} onRequestActivity={handleRequest} />;
};

export default ActivityContainer;
