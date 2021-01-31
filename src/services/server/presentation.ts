import {post} from "../http";
import {getServerOrigin} from "../../config";
import {Feedback} from "../../interfaces/feedback";

/**
 * Метод для отправки запроса на получение презентации
 * Используется на сервере
 */
const sendPresentation = (data: Feedback): Promise<Feedback> => {
    const origin = getServerOrigin();

    return post<Feedback>(`${origin}/feedback/presentation`, data);
}

export {
    sendPresentation,
}