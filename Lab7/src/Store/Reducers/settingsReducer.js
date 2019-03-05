//@flow
import { LOAD_SETTINGS_PAGE_DATA, SUBMIT_SETTINGS_PAGE_DATA, PENDING, SUCCESS, FAIL } from '../constants';

export const initialState = {
  loadingData: false,
  values: {},
};

const loadSettingsActionMap = {
  // Public GET's
  [LOAD_SETTINGS_PAGE_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [LOAD_SETTINGS_PAGE_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [LOAD_SETTINGS_PAGE_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      values: data,
      loadingData: false,
    };
  },
};
const submitSettingsActionMap = {
  // Public GET's
  [SUBMIT_SETTINGS_PAGE_DATA + PENDING]: (state) => {
    return {
      ...state,
      loadingData: true,
    };
  },
  [SUBMIT_SETTINGS_PAGE_DATA + FAIL]: (state) => {
    return {
      ...state,
      loadingData: false,
    };
  },
  [SUBMIT_SETTINGS_PAGE_DATA + SUCCESS]: (state, action) => {
    const { payload: { data } } = action;

    return {
      ...state,
      values: data,
      loadingData: false,
    };
  },
};


const actionsMap = {
  ...loadSettingsActionMap,
  ...submitSettingsActionMap,
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
