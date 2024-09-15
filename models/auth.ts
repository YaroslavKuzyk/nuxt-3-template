export interface ISignUpUser {
  email: string;
  password: string;
  confirm_password: string;
}

export interface ISignInUser {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirm_password: string;
  email: string;
  token: string;
}
