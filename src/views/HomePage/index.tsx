import { useContext } from 'react';
import { GameList } from '..';
import { Header, Loader, Logo } from '../../components';
import { GameContext } from '../../context';

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
