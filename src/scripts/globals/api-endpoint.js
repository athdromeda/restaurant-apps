import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_URL}list`,
  DETAIL: (id) => `${CONFIG.API_URL}detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_URL}review`,
};

export default API_ENDPOINT;
