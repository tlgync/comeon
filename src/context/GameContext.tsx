import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { Service } from '../services';
import { ICategories, IGame } from '../types/game';

type Props = {
  children: ReactNode;
};

export type GameContextState = {
  games: IGame[];
  setGames: Dispatch<SetStateAction<IGame[]>>
  gamesClone: IGame[];
  setGamesClone: Dispatch<SetStateAction<IGame[]>>
  categories: ICategories[]
  setCategories: Dispatch<SetStateAction<ICategories[]>>
  isLoader: boolean
  setIsLoader: Dispatch<SetStateAction<boolean>>
};

const contextDefaultValues: GameContextState = {
  games: [],
  setGames: () => {},
  gamesClone: [],
  setGamesClone: () => {},
  categories: [],
  setCategories: () => {},
  isLoader: false,
  setIsLoader: () => {},
};
const GameContext = React.createContext<GameContextState>(contextDefaultValues);
const GameConsumer = GameContext.Consumer;

const GameProvider = ({ children }: Props) => {
  const [games, setGames] = useState<IGame[]>([]);
  const [gamesClone, setGamesClone] = useState<IGame[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [isLoader, setIsLoader] = useState(false);

  const getGames = () => {
    setIsLoader(true);
    Service.Game.GetGames().then(res => {
      if (res.length > 0) {
        setGames(res);
        setGamesClone(res);
        setIsLoader(false);
      } else {
        setIsLoader(false);
      }
    });
  };
  const getCategories = () => {
    setIsLoader(true);
    Service.Game.GetCategories().then(res => {
      if (res.length > 0) {
        setIsLoader(false);
        setCategories(res);
      } else {
        setIsLoader(false);
      }
    });
  };
  useEffect(() => {
    getGames();
    getCategories();
  }, []);

  return (
    <GameContext.Provider value={{ games,
      setGames,
      categories,
      setCategories,
      gamesClone,
      setGamesClone,
      isLoader,
      setIsLoader }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameConsumer, GameProvider };
