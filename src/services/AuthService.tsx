import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';
import { IAuth, ILogout } from '../types/auth';

const login = BaseConfig.api.user('/login');
const logout = BaseConfig.api.user('/logout');

export const AuthService = {

  Login(data: IAuth) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(login, requestOptions);
  },

  /**
    * [LOGOUT]
    */
  Logout(data: ILogout) {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(logout, requestOptions);
  },

};
