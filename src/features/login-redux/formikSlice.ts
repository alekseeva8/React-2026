import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as constants from "../../shared/constants/index";

// Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
// Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
// которая следит за изменениями в "черновом state" и создает новое
// неизменное состояние на основе этих изменений

export type LoginData = {
  email: string;
  password: string;
};

export const formikSlice = createSlice({
  name: "formikForm",
  initialState: {
    value: constants.loginInitialValues,
  },
  reducers: {
    saveLoginData: (state, action: PayloadAction<LoginData>) => {
      state.value = action.payload;
    },
  },
});

// Функция действия генерируется на каждую функцию reducer, определённую в createSlice
export const { saveLoginData } = formikSlice.actions;

export default formikSlice.reducer;
