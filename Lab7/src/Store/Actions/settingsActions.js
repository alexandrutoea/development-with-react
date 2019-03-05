import { LOAD_SETTINGS_PAGE_DATA, SUBMIT_SETTINGS_PAGE_DATA } from '../constants';

export const loadSettingsData = () => {
  return {
    type: LOAD_SETTINGS_PAGE_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'GET',
        url: 'settings.json',
      },
    },
  };
};

export const submitSettingsData = (values) => {
  return {
    type: SUBMIT_SETTINGS_PAGE_DATA,
    payload: {
      client: 'default',
      request: {
        method: 'POST',
        url: 'settings.json',
        data: {
          ...values,
        },
      },
    },
  };
};
