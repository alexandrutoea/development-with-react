import { LOAD_STATISTICS_PAGE_DATA } from '../constants';

export const loadStatisticsData = () => {
  return {
    type: LOAD_STATISTICS_PAGE_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'GET',
        url: 'statistics.json',
      },
    },
  };
};
