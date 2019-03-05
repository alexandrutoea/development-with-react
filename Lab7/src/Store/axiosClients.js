/* eslint-disable no-unused-vars */
import axios from 'axios';

const JSON_BASE_URL = '/json/';

const defaultClient = axios.create({
  baseURL: JSON_BASE_URL,
});

export const clients = {
  default: {
    client: defaultClient,
  },
};

export default defaultClient;
