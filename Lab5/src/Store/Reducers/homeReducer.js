//@flow
import { LOAD_HOME_PAGE_DATA, PENDING, SUCCESS, FAIL } from '../constants';

export const initialState = {
  loadingData: false,
};

const loadHomeDataActionMap = {
  // Public GET's
  [LOAD_HOME_PAGE_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [LOAD_HOME_PAGE_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [LOAD_HOME_PAGE_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      ...data,
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadHomeDataActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
