/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Categories, TabCategories } from '../../components';
import { GameContext } from '../../context';
import { useWindowSize } from '../../hooks/useWindowSize';

export const GameList = () => {
  const { games } = useContext(GameContext);
  const size = useWindowSize();

  return (
    <div className="ui grid">
      {size.width && size.width < 600 ? <TabCategories /> : null}
      <div className={`${size.width && size.width > 600 ? 'twelve' : 'sixteen'} wide column`}>
        <h3 className="ui dividing header">Games</h3>

        <div className="ui relaxed divided game items links">
          {Array.isArray(games) && games.map((item, index) => (
            <div key={index} className="game item center">
              <div className="ui small image">
                <img src={item.icon} alt="game-icon" className="smallImage hoverImage" />
              </div>
              <div className="content">
                <div className="header">
                  <b className="name" />
                  {item.name}

                </div>
                <div className="description">{item.description}</div>
                <div className="extra">
                  <Link to={`/play/${item.code}`} className={`play ui ${size.width && size.width < 600 ? 'left' : 'right'} floated secondary button inverted`}>
                    Play
                    <i className="right chevron icon" />
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {size.width && size.width > 600 ? <Categories /> : null}
    </div>
  );
};
