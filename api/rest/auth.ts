import { AxiosResponse } from "axios";
import makeRequest from "../makeRequets";
import {
  ISignUpUser,
  ISignInUser,
  IForgotPassword,
  IResetPassword,
  IResetPasswordParams,
} from "~/models/auth";

export const signUp = (data: ISignUpUser): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/sign-up",
    method: "POST",
    data,
  });
};

export const signIn = (data: ISignInUser): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/sign-in",
    method: "POST",
    data,
  });
};

export const forgotPassword = (
  data: IForgotPassword,
): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/forgot-password",
    method: "POST",
    data,
  });
};

export const resetPassword = (
  data: IResetPassword,
): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/reset-password",
    method: "POST",
    data,
  });
};

export const logOut = (): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/sign-out",
    method: "Get",
  });
};

export const getUser = (): Promise<AxiosResponse<any>> => {
  return makeRequest({
    url: "/api/user",
    method: "Get",
  });
};
