import { atom } from "recoil";

export const LoginState = atom({
  key: "LoginState",
  default: false,
});

export const currentFileState = atom({
  key: "currentFileState",
  default: "",
});
