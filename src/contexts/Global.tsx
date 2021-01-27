import { createContext } from 'react';
import { AuthUrls } from '../interfaces/auth-urls';
import { AbTest } from '../interfaces/ab-test';

interface GlobalContextData {
    authUrls: AuthUrls;
    abTests: AbTest[];
}

const initialState = {
  authUrls: {
    loginUrl: '',
    logoutUrl: '',
  },
  abTests: [],
};

export const GlobalContext = createContext<GlobalContextData>(initialState);
