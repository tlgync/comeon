/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* eslint-disable no-unused-vars */
declare global {
    interface Window {
      comeon?: any;
    }
  }
  interface IParams {
      game: string
  }
export const Play = () => {
  const { game } = useParams<IParams>();
  const { comeon } = window;
  useEffect(() => {
    if (game) {
      comeon.game.launch(game.toLocaleLowerCase());
    }
  }, []);

  return (
    <div className="centerGame">
      <div className="main container">
        <div className="ingame">
          <div className="ui grid centered">

            <div className="ten wide column">
              <div id="game-launch" />
            </div>
            <div className="three wide column" />
            <div className="three wide row">
              <div
                onClick={() => window.location.href = '/'}
                className="ui right floated secondary button inverted"
              >
                <i className="left chevron icon" />
                Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
