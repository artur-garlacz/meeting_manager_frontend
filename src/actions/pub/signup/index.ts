import { createActionAndReducer } from 'react-async-action-reducer';
import * as publicApi from '../../../shared/publicApi'


interface IResponse {
    status: any;
}

export type IAuthenticationRequest = any;

const signup = createActionAndReducer<IAuthenticationRequest, any>({
    prefix: 'pub.signup',
    dataToKey: (data?: any): string => `${data?.email}`,
    perform: async (data?: any): Promise<any> => {
        return await publicApi.createAccount(data as any);
    },
});

// const confirm = createActionAndReducer<IVerifyToken, any>({
//     prefix: 'pub.confirm',
//     dataToKey: (data?: IVerifyToken): string => `${data?.token}`,
//     perform: async (data?: IVerifyToken): Promise<any> => {
//         return await publicApi.getVerifyUser(data as IVerifyToken);
//     },
// });

// const invitation = createActionAndReducer<IVerifyToken, any>({
//     prefix: 'pub.invitation',
//     dataToKey: (data?: IVerifyToken): string => `${data?.token}`,
//     perform: async (data?: IVerifyToken): Promise<any> => {
//         return await publicApi.getInvitedUser(data as IVerifyToken);
//     },
// });

// const invitationSignup = createActionAndReducer<ICreateInvitedUser, any>({
//     prefix: 'pub.invitationSignup',
//     dataToKey: (data?: ICreateInvitedUser): string => `${data?.token}`,
//     perform: async (data?: ICreateInvitedUser): Promise<any> => {
//         return await publicApi.createInvitedAccount(data?.user as ICreateAccountCredentials, data?.token as string);
//     },
// });

const actions = {
    reducers: {
        ...signup.reducer,
    },
    signup,
}

export default actions;
