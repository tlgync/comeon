import { ChangeEvent, useContext } from 'react';
import { GameContext } from '../context/GameContext';
import { useWindowSize } from '../hooks/useWindowSize';

export const Logo = () => {
  const { setGames, gamesClone } = useContext(GameContext);
  const size = useWindowSize();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setGames(gamesClone.filter(item => item.name.toLowerCase().includes(e.target.value)));
  };
  return (
    <div className="ui one page center aligned grid">
      <div className={`${size.width && size.width > 600 ? 'twelve' : 'ten'} wide column`}>
        <img src="images/logo.svg" alt="logo" />
      </div>
      {size.width && size.width < 600
        ? (
          <div className="mobile only six wide column flexCenter">
            <div className="search ui small icon input ">
              <input className="inputSmall" onChange={e => handleSearch(e)} type="text" placeholder="Search Game" />
              <i className="search icon" />
            </div>
          </div>
        ) : null}
    </div>
  );
};
