import axios, {AxiosRequestConfig} from 'axios';

const headers: AxiosRequestConfig = {
    responseType: 'json',
}

const get = async <T>(url: string) => {
  const response = await axios({
      ...headers,
      url,
  });

  return response.data as T;
};

const post = async <T>(url: string, data: T) => {
    const response = await axios({
        ...headers,
        method: 'POST',
        url,
        data
    });

    return response.data as T;
};


export {
  get,
  post,
};
