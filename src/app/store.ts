import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login-redux/loginSlice";
import formikReducer from "../features/login-redux/formikSlice";

export const store = configureStore({
  reducer: {
    loginForm: loginReducer,
    formikForm: formikReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;

// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
