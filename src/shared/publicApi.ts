import { publicAxios } from './authentication';
import { ICreateAccountCredentials } from './types';

export const getOffers = async (): Promise<any> => {
  const res = await publicAxios.get(
    'https://jsonplaceholder.typicode.com/todos',
  );
  return res?.data;
};

// sign up request
export const createAccount = async (
  account: ICreateAccountCredentials,
): Promise<any> => {
  const res = await publicAxios.post(
    `http://localhost:3000/api/v1/tokens/user_register`,
    { user: account },
  );
  return res?.data as any;
};
