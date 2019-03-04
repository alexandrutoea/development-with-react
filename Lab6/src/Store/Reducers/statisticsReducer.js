//@flow
import { LOAD_STATISTICS_PAGE_DATA, PENDING, SUCCESS, FAIL } from '../constants';

export const initialState = {
  loadingData: false,
  dataSet: [],
};

const loadStatisticsActionMap = {
  // Public GET's
  [LOAD_STATISTICS_PAGE_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [LOAD_STATISTICS_PAGE_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [LOAD_STATISTICS_PAGE_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      dataSet: data || [],
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadStatisticsActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
