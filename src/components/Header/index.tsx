/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChangeEvent, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { GameContext } from '../../context/GameContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Service } from '../../services';

export const Header = () => {
  const { user, setIsAuth } = useContext(AuthContext);
  const { setGames, gamesClone } = useContext(GameContext);
  const { avatar, name, event } = user;
  const size = useWindowSize();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setGames(gamesClone.filter(item => item.name.toLowerCase().includes(e.target.value)));
  };

  const userDetail = localStorage.getItem('username');
  const username = userDetail && JSON.parse(userDetail);

  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className={`${size.width && size.width > 600 ? 'twelve' : 'sixteen'} wide column`}>
          <div className="ui list ten wide column">
            <div className="player item">
              <img className="ui avatar image" src={avatar} alt="avatar" />
              <div className="content">
                <div className="header">
                  <b className="name" />
                  {name}
                </div>
                <div className="description event">{event}</div>
              </div>
            </div>

          </div>
          <div
            onClick={() => {
              Service.User.Logout({ username }).then(res => {
                if (res && res.status === 'success') {
                  localStorage.removeItem('user');
                  setIsAuth(false);
                }
              });
            }}
            className={`logout ui ${size.width && size.width < 600 ? 'right' : 'left'} six wide column  secondary button inverted`}
          >
            <i className="left chevron icon" />
            Log Out
          </div>
        </div>
        <div className="four wide column" style={{ display: size.width && size.width < 600 ? 'none' : 'block' }}>
          <div className="search ui small icon input ">
            <input onChange={e => handleSearch(e)} type="text" placeholder="Search Game" />
            <i className="search icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
