import { get } from './http';
import { AuthUrls } from '../interfaces/AuthUrls';

const getAuthUrls = async (): Promise<AuthUrls> => get<AuthUrls>('login');

export {
  getAuthUrls,
};
