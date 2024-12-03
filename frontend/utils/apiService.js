import axios from 'axios';
import getConfig from 'next/config';
import { getSessionToken, removeSessionAndLogoutUser } from './authentication';

const { publicRuntimeConfig } = getConfig();

const ApiService = axios.create({
  baseURL: publicRuntimeConfig.API_BASE_URL
});

/**
 * Interceptor for all requests
 */
ApiService.interceptors.request.use(
  (config) => {
    /**
     * Add your request interceptor logic here: setting headers, authorization etc.
     */
    config.headers['Content-Type'] = 'application/json';

    if (!config?.noAuth) {
      const token = getSessionToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Interceptor for all responses
 */
ApiService.interceptors.response.use(
  /**
  * Add logic for successful response
  */
  (response) => response?.data || {},

  /**
  * Add logic for any error from backend
  */
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.data?.result_code === 11) {
      // if authorized to logout user and redirect login page
      removeSessionAndLogoutUser();
    }

    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401 && !originalRequest._retry) {
      // if authorized to logout user and redirect login page
      removeSessionAndLogoutUser();
    }

    // Handle other error cases
    return Promise.reject(error);
  }
);

export default ApiService;
