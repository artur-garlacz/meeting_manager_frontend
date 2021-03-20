import { publicAxios } from './authentication';
import {
  ICreateAccountCredentials,
  IPagePayload,
  IVerifyResponse,
  IVerifyToken,
} from './types';
import { IOffer } from './types/offers';

// currently jsonplaceholder for mock test :)
export const getOffers = async (): Promise<IPagePayload<IOffer>> => {
  const res = await publicAxios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return res?.data;
};

// sign up request
export const createAccount = async <T>(
  account: ICreateAccountCredentials,
): Promise<T> => {
  const res = await publicAxios.post(
    `http://localhost:3000/api/v1/tokens/user_register`,
    { user: account },
  );
  return res?.data;
};

export const getVerifyUser = async (
  values: IVerifyToken,
): Promise<IVerifyResponse> => {
  const { token } = values;
  const res = await publicAxios.get(`/api/v1/public/users/verify/${token}`);
  return res?.data as IVerifyResponse;
};

export const getInvitedUser = async (
  values: IVerifyToken,
): Promise<IVerifyResponse> => {
  const { token } = values;
  const res = await publicAxios.get(`/api/v1/public/users/invited/${token}`);
  return res?.data as IVerifyResponse;
};
