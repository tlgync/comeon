import { useWindowSize } from '../../hooks/useWindowSize';

export const Logo = () => {
  const size = useWindowSize();
  return (
    <div className="ui one page center aligned grid">
      <div className={`${size.width && size.width > 600 ? 'twelve' : 'ten'} wide column`}>
        <img src="images/logo.svg" alt="logo" />
      </div>
      {size.width && size.width < 600
        ? (
          <div className="mobile only six wide column flexCenter">
            <div className="search ui small icon input ">
              <input className="inputSmall" type="text" placeholder="Search Game" />
              <i className="search icon" />
            </div>
          </div>
        ) : null}
    </div>
  );
};
