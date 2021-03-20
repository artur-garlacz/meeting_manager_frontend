import { createActionAndReducer } from 'react-async-action-reducer';
import * as publicApi from '../../../shared/publicApi';
import { IPagePayload } from '../../../shared/types';
import { IOffer } from '../../../shared/types/offers';

const index = createActionAndReducer<undefined, IPagePayload<IOffer>>({
  prefix: 'pub.offers',
  perform: async (): Promise<IPagePayload<IOffer>> => {
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
