/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './localStorage';
import {
  ErrorCodes,
  HttpError,
  HttpUnauthorizedError,
  HttpNotFoundError,
  HttpUnprocessableEntityError,
} from './errors';

const USER_STORAGE_KEY = 'user_auth_token';
const USER_API_ENDPOINT = 'http://localhost:3000/api/v1/tokens/user_token';
const USER_INFO_ENDPOINT = 'http://localhost:3000/api/v1/users/info';

export interface IAuthenticateResponse {
  email: string;
  firstName: string;
  lastName: string;
}

class Authentincation {
  private apiEndpoint: string;

  private infoEndpoint: string;

  private storageKey: string;

  private token?: string;

  constructor(storageKey: string, apiEndpoint: string, infoEndpoint: string) {
    this.storageKey = storageKey;
    this.apiEndpoint = apiEndpoint;
    this.infoEndpoint = infoEndpoint;
  }

  public saveToLocalStorage() {
    if (this.token) {
      this.setAuthToken(this.token);
    }
  }

  public setAuthToken(token: string) {
    this.token = token;
    setLocalStorage(this.storageKey, token);
  }

  public getAuthToken() {
    return this.token || getLocalStorage(this.storageKey);
  }

  public removeAuthToken() {
    removeLocalStorage(this.storageKey);
  }

  public refreshToken(token: string) {
    if (token !== this.getAuthToken()) {
      setLocalStorage(this.storageKey, token);
    }
  }

  public async authenticate(email: string, password: string) {
    const response = await axios.post(this.apiEndpoint, {
      auth: { email, password },
    });
    return response.data.jwt;
  }

  public async getUserInfo(
    token?: string,
  ): Promise<IAuthenticateResponse | undefined> {
    token = token || this.getAuthToken();
    if (token === undefined) {
      return undefined;
    }

    const response = await userAxios.get<IAuthenticateResponse>(
      this.infoEndpoint,
    );
    return response.data;
  }
}

const initializeAxiosInstance = (auth?: Authentincation) => {
  const instance = axios.create();
  instance.interceptors.request.use((conf) => {
    if (auth !== undefined) {
      const token = auth.getAuthToken();
      if (token !== undefined) {
        conf.headers.Authorization = `Bearer ${token}`;
      }
    }
    conf.headers.Accept = 'application/json';
    return conf;
  });

  instance.interceptors.response.use(
    (response) => {
      if (auth !== undefined) {
        const refreshToken = response.headers['x-refresh-token'];
        if (refreshToken !== undefined) {
          auth.setAuthToken(refreshToken);
        }
      }
      return response;
    },
    (error) => {
      let { message } = error;
      if (error?.response?.data?.message !== undefined) {
        message = error.response.data.message;
      }

      const errors: any = error?.response?.data?.errors;

      switch (error?.response?.status) {
        case ErrorCodes.UNAUTHORIZED:
          // TODO: update state to reflect fact user is now logged out?
          return Promise.reject(new HttpUnauthorizedError(message, errors));
        case ErrorCodes.NOT_FOUND:
          return Promise.reject(new HttpNotFoundError(message, errors));
        case ErrorCodes.UNPROCESSABLE_ENTITY:
          return Promise.reject(
            new HttpUnprocessableEntityError(message, errors),
          );
        case ErrorCodes.INTERNAL_ERROR:
          return Promise.reject(new HttpUnauthorizedError(message, errors));
        default:
          if (error?.response) {
            return Promise.reject(new HttpError(message, errors));
          }
          return Promise.reject(error);
      }
    },
  );
  return instance;
};

export const userAuth = new Authentincation(
  USER_STORAGE_KEY,
  USER_API_ENDPOINT,
  USER_INFO_ENDPOINT,
);
export const userAxios = initializeAxiosInstance(userAuth);

export const publicAxios = initializeAxiosInstance();
