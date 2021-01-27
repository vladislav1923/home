import { get } from './http';
import { AuthUrls } from '../interfaces/auth-urls';

const getAuthUrls = async (): Promise<AuthUrls> => get<AuthUrls>('login');

export {
  getAuthUrls,
};
