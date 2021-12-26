import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';

const games = BaseConfig.api.user('/games');
const categories = BaseConfig.api.user('/categories');

export const GameService = {

  GetGames() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return Fetch(games, requestOptions);
  },

  GetCategories() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    return Fetch(categories, requestOptions);
  },

};
