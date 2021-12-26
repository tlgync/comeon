/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ICategories } from '../../types/game';

export const Categories = () => {
  const { categories, gamesClone, setGames } = useContext(GameContext);
  const size = useWindowSize();
  console.log(size);

  const handleCategories = (category: ICategories) => {
    setGames(gamesClone.filter(f => f.categoryIds.includes(category.id)));
  };

  return (
    <div className={` ${size?.width && size?.width > 600 ? 'four' : 'twelve'} wide column`}>
      <h3 className="ui dividing header">Categories</h3>

      <div className="ui selection animated list category items">

        {Array.isArray(categories) && categories.map((category, index) => (
          <div
            onClick={() => {
              handleCategories(category);
            }}
            key={index}
            className="category item"
          >
            <div className="content">
              <div className="header">{category.name}</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
