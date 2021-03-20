import { createActionAndReducer } from 'react-async-action-reducer';
import { userAuth, IAuthenticateResponse } from '../../shared/authentication';

interface IAuthenticationLoginRequest {
  email: string;
  password: string;
}

interface IAuthenticationLogoutRequest {
  logout: boolean;
}

export type IAuthenticationRequest =
  | IAuthenticationLoginRequest
  | IAuthenticationLogoutRequest;

const performLogout = () => {
  userAuth.removeAuthToken();
  return undefined;
};

const authenticate = createActionAndReducer<
  IAuthenticationRequest,
  IAuthenticateResponse | undefined
>({
  prefix: 'auth.user',
  clearOtherData: ['user.userAccounts.list'],
  perform: async (
    data?: IAuthenticationRequest,
  ): Promise<IAuthenticateResponse | undefined> => {
    if (data !== undefined && (data as IAuthenticationLogoutRequest).logout) {
      return performLogout();
    }

    let info: IAuthenticateResponse | undefined;
    // see if current token is valid
    try {
      info = await userAuth.getUserInfo();
    } catch (e) {
      // ignore error
      return undefined;
    }
    if (info !== undefined) {
      return info;
    }

    // login if email was specified
    if (
      data !== undefined &&
      (data as IAuthenticationLoginRequest).email !== undefined
    ) {
      const token = await userAuth.authenticate(
        (data as IAuthenticationLoginRequest).email,
        (data as IAuthenticationLoginRequest).password,
      );
      if (token === undefined) {
        throw new Error('unable to authenticate');
        return undefined;
      }
      userAuth.setAuthToken(token);
      return await userAuth.getUserInfo();
    }
  },
});

const actions = {
  reducers: {
    ...authenticate.reducer,
  },

  authenticate,
};

export default actions;
