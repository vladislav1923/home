import { get } from '../http';
import { AbTest } from '../../interfaces/ab-test';
import {getServerOrigin} from "../../config";

/**
 * Метод для получения списка запущенных АБ тестов
 * Используется на сервере
 */
const getActiveAbTests = async (): Promise<AbTest[]> => {
    const origin = getServerOrigin();

    return get<AbTest[]>(`${origin}/abtest`);
}

export {
  getActiveAbTests,
};
