import { get } from './http';

const getAuthUrls = async () => get('login');

export {
  getAuthUrls,
};
