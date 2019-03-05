//@flow
import { LOAD_USER_DETAILS_PAGE_DATA, PENDING, SUCCESS, FAIL } from '../constants';

export const initialState = {
  loadingData: false,
};

const loadUserDetailsActionMap = {
  // Public GET's
  [LOAD_USER_DETAILS_PAGE_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [LOAD_USER_DETAILS_PAGE_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [LOAD_USER_DETAILS_PAGE_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      ...data,
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadUserDetailsActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
