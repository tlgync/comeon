import { useContext } from 'react';
import { GameContext } from '../context';
import { ICategories } from '../types/game';

export const TabCategories = () => {
  const { categories, gamesClone, setGames } = useContext(GameContext);

  const handleCategories = (category: ICategories) => {
    setGames(gamesClone.filter(f => f.categoryIds.includes(category.id)));
  };
  return (
    <div className="scrollmenu">
      {Array.isArray(categories) && categories.map(category => (
        <a onClick={() => handleCategories(category)} href="#home">{category.name}</a>
      ))}

    </div>
  );
};
