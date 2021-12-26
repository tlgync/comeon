import { useContext } from 'react';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { Logo } from '../../components/Logo';
import { GameContext } from '../../context/GameContext';
import { GameList } from '../Game';

export const HomePage = () => {
  const { isLoader } = useContext(GameContext);
  return (
    isLoader ? (
      <Loader />
    ) : (
      <>
        <Logo />
        <div className="main container">
          <Header />
          <GameList />
        </div>
      </>
    )
  );
};
