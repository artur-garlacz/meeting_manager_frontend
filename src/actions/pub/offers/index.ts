import { createActionAndReducer } from 'react-async-action-reducer';
import * as publicApi from '../../../shared/publicApi';

export type IAuthenticationRequest = any;

const index = createActionAndReducer<IAuthenticationRequest, any>({
  prefix: 'pub.offers',
  perform: async (): Promise<any> => {
    return await publicApi.getOffers();
  },
});

const actions = {
  reducers: {
    ...index.reducer,
  },
  index,
};

export default actions;
