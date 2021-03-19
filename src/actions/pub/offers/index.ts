import { createActionAndReducer } from 'react-async-action-reducer';
import * as publicApi from '../../../shared/publicApi';

const index = createActionAndReducer<undefined, {}>({
  prefix: 'pub.offers',
  perform: async (): Promise<any> => {
    const result = await publicApi.getOffers();
    return result;
  },
});

const actions = {
  reducers: {
    ...index.reducer,
  },
  index,
};

export default actions;
