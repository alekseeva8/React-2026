import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginForm } from "../../views/Login/index";

// Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
// Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
// которая следит за изменениями в "черновом state" и создает новое
// неизменное состояние на основе этих изменений

const formInitialState: LoginForm = {
  values: { email: "", password: "" },
  touched: { email: false, password: false },
};

export const loginSlice = createSlice({
  name: "loginForm",
  initialState: {
    value: formInitialState,
  },
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.value.values.email = action.payload;
      state.value.touched.email = true;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.value.values.password = action.payload;
      state.value.touched.password = true;
    },
  },
});

// Функция действия генерируется на каждую функцию reducer, определённую в createSlice
export const { updateEmail, updatePassword } = loginSlice.actions;

export default loginSlice.reducer;
