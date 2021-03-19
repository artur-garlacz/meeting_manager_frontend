export interface ILoginAccountCredentials {
  email: string;
  password: string;
}

// sign up form types
export interface ICreateAccountCredentials extends ILoginAccountCredentials {
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IVerifyToken {
  token: string;
}

export interface IVerifyResponse {
  ok?: boolean;
}

export type ILangTypes = 'pl' | 'en';

export interface IEntry {
  id: number;
}
