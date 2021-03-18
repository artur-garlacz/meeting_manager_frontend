export interface ILoginAccountCredentials {
  email: string;
  password: string;
}

export interface ICreateAccountCredentials extends ILoginAccountCredentials {
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
