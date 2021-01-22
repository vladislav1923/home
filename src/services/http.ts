import axios from 'axios';
import { getApiOrigin } from '../config';

const get = async <T>(url: string) => {
  const origin = getApiOrigin();
  const response = await axios({
    url: `${origin}/backend/rest/${url}`,
    responseType: 'json',
  });

  return response.data as T;
};

export {
  get,
};
