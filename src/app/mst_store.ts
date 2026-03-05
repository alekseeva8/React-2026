import { types } from "mobx-state-tree";
import * as constants from "../shared/constants/index";
import * as functions from "../shared/functions/index";

const LoginFormModel = types
  .model({
    values: types.model(constants.formInitialState.values),
    touched: types.model(constants.formInitialState.touched),
  })
  .views((self) => ({
    get isFormValid() {
      const isValidEmail = functions.isValidEmail(self.values.email);
      const isValidPassword = functions.isValidPassword(self.values.password);
      return isValidEmail && isValidPassword;
    },
    get isEmailErrorShown() {
      const isValidEmail = functions.isValidEmail(self.values.email);
      return !isValidEmail && self.touched.email;
    },
    get isPasswordErrorShown() {
      const isValidPassword = functions.isValidPassword(self.values.password);
      return !isValidPassword && self.touched.password;
    },
  }))
  .actions((self) => ({
    setEmail(value: string) {
      self.values.email = value;
      self.touched.email = true;
    },

    setPassword(value: string) {
      self.values.password = value;
      self.touched.password = true;
    },
  }));

export const loginStore = LoginFormModel.create(constants.formInitialState);

export type LoginStoreType = typeof LoginFormModel.Type;
