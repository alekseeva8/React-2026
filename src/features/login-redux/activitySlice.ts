import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as constants from "../../shared/constants/index";

// Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
// Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
// которая следит за изменениями в "черновом state" и создает новое
// неизменное состояние на основе этих изменений

export type Activity = {
  data?: ActivityData;
  error?: string;
  loading: boolean;
};

type ActivityData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    value: constants.activityInitialState,
  },
  reducers: {
    fetchRequested: (state) => {
        state.value = {...constants.activityInitialState, loading: true};
    },
    fetchSucceeded: (state, action: PayloadAction<ActivityData>) => {
        state.value = {...constants.activityInitialState, data: action.payload};
    },
    fetchFailed: (state, action: PayloadAction<string>) => {
      state.value = {...constants.activityInitialState, error: action.payload};
    },
  },
});

// Функция действия генерируется на каждую функцию reducer, определённую в createSlice
export const { fetchRequested, fetchSucceeded, fetchFailed } = activitySlice.actions;

export default activitySlice.reducer;
