import { LOAD_HOME_PAGE_DATA } from '../constants';

export const loadHomePageData = () => {
  return {
    type: LOAD_HOME_PAGE_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'GET',
        url: 'homePage.json',
      },
    },
  };
};
