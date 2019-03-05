import { LOAD_USER_DETAILS_PAGE_DATA } from '../constants';

export const loadUserDetailsData = () => {
  return {
    type: LOAD_USER_DETAILS_PAGE_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'GET',
        url: 'userDetails.json',
      },
    },
  };
};
