import { post } from '../http';
import { getClientOrigin } from '../../config';
import { Feedback } from '../../interfaces/feedback';

/**
 * Метод для отправки запроса на получение презентации
 * Используется на клиенте
 */
const sendPresentation = (data: Feedback): Promise<Feedback> => {
  const origin = getClientOrigin();

  return post<Feedback>(`${origin}/presentation`, data);
};

export {
  sendPresentation,
};
