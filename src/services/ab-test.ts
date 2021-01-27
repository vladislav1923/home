import { AbTest } from '../interfaces/ab-test';
import { get } from './http';

const getActiveAbTests = async (): Promise<AbTest[]> => get<AbTest[]>('abtest');

export {
  getActiveAbTests,
};
