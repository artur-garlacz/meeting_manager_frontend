import { createActionAndReducer } from 'react-async-action-reducer';
import { ICreateAccountCredentials } from '../../../shared/types';
import * as userApi from '../../../shared/userApi';
// const list = createActionAndReducer<{}, any[]>({
//   prefix: 'user.userAccounts.list',

//   perform: (): Promise<IUserAccountEntry[]> => {
//     return userApi.getUserAccounts();
//   },
// });

const index = createActionAndReducer<any, any>({
  prefix: 'user.userAccounts.index',
  perform: async (): Promise<any> => {
    const users = await userApi.getUserData();
    return users;
  }
})

// const editData = createActionAndReducer<ICreateAccountCredentials, any>({
//   prefix: 'user.userAccounts.edit',
//   clearOtherData: [
//     'auth.user',
//   ],
//   // dataToKey: (data?: ICreateAccountCredentials): string => `${data?.userAccountId}/${data?.id}/${data?.requestId}`,
//   perform: async (data?: ICreateAccountCredentials): Promise<any> => {
//     let result: any | undefined;
//     if (data !== undefined) {
//       result = await userApi.editUserData(data);
//     }
//     return result;
//   }
// })


const actions = {
  reducers: {
    ...index.reducer
  },
  index
}

export default actions;
