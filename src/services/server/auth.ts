import { get } from '../http';
import {getServerOrigin} from "../../config";
import { AuthUrls } from '../../interfaces/auth-urls';

/**
 * Метод для получения данных для авторизации
 * Используется на сервере
 */
const getAuthUrls = async (): Promise<AuthUrls> => {
 const origin = getServerOrigin();

 return get<AuthUrls>(`${origin}/login`);
};

export {
  getAuthUrls,
};
