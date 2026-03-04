import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login-redux/loginSlice";
import formikReducer from "../features/login-redux/formikSlice";
import activityReducer from "../features/login-redux/activitySlice";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    loginForm: loginReducer,
    formikForm: formikReducer,
    activity: activityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



