import { AbTest } from '../interfaces/AbTest';
import { get } from './http';

const getActiveAbTests = async (): Promise<AbTest[]> => get<AbTest[]>('abtest');

export {
  getActiveAbTests,
};
