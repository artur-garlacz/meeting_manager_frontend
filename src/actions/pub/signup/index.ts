import { createActionAndReducer } from 'react-async-action-reducer';
import * as publicApi from '../../../shared/publicApi';
import {
  ICreateAccountCredentials,
  IVerifyResponse,
  IVerifyToken,
} from '../../../shared/types';

const signup = createActionAndReducer<ICreateAccountCredentials, any>({
  prefix: 'pub.signup',
  dataToKey: (data?: ICreateAccountCredentials): string => `${data?.email}`,
  perform: async (data?: ICreateAccountCredentials): Promise<any> => {
    const result = await publicApi.createAccount(
      data as ICreateAccountCredentials,
    );
    return result;
  },
});

const confirm = createActionAndReducer<IVerifyToken, IVerifyResponse>({
  prefix: 'pub.confirm',
  dataToKey: (data?: IVerifyToken): string => `${data?.token}`,
  perform: async (data?: IVerifyToken): Promise<IVerifyResponse> => {
    const result = await publicApi.getVerifyUser(data as IVerifyToken);
    return result;
  },
});

const invitation = createActionAndReducer<IVerifyToken, IVerifyResponse>({
  prefix: 'pub.invitation',
  dataToKey: (data?: IVerifyToken): string => `${data?.token}`,
  perform: async (data?: IVerifyToken): Promise<IVerifyResponse> => {
    const result = await publicApi.getInvitedUser(data as IVerifyToken);
    return result;
  },
});

const actions = {
  reducers: {
    ...signup.reducer,
    ...confirm.reducer,
    ...invitation.reducer,
  },
  signup,
};

export default actions;
