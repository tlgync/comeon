/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Loader } from '../../components/Loader';
import { AuthContext } from '../../context/AuthContext';
import { GameContext } from '../../context/GameContext';
import { Service } from '../../services';

type Inputs = {
    username: string,
    password: string,
  };
export const Login = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setIsAuth } = useContext(AuthContext);
  const { isLoader, setIsLoader } = useContext(GameContext);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onLogin: SubmitHandler<Inputs> = data => {
    setIsLoader(true);
    Service.User.Login(data).then(res => {
      if (res.status === 'success') {
        setUser(res.player);
        localStorage.setItem('user', JSON.stringify(res.player));
        localStorage.setItem('username', JSON.stringify(data.username));
        setIsLoader(false);
        setIsAuth(true);
      } else {
        setError(res.error);
        setIsLoader(false);
        setIsAuth(false);
      }
    });
  };

  return (
    <div className="centerGame">
      <div className="main container">
        {isLoader
          ? (
            <Loader />
          )
          : (
            <div className="login">
              <div className="ui grid centered">
                <form>
                  {error && (
                  <div className="ui negative message">
                    <div className="header">
                      {error}
                    </div>
                  </div>
                  )}
                  <div className="fields">
                    <div className="required field">
                      <div className="ui icon input">
                        <input type="text" placeholder="Username" {...register('username', { required: true })} />
                        <i className="user icon" />
                      </div>
                    </div>
                    <div className="required field">
                      {errors.username && (
                      <div className="ui mini negative message">
                        <div className="">
                          Username is required
                        </div>
                      </div>
                      )}
                    </div>
                    <div className="required field">
                      <div className="ui icon input">
                        <input type={!showPassword ? 'password' : 'text'} placeholder="Password" {...register('password', { required: true })} />
                        <i
                          onClick={() => {
                            setShowPassword(!showPassword);
                            console.log('object');
                          }}
                          className={!showPassword ? 'lock icon' : 'lock open icon'}
                          style={{ zIndex: 99999, cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                    <div className="required field">
                      {errors.password && (
                      <div className="ui mini negative message">
                        <div className="">
                          Password is required
                        </div>
                      </div>
                      )}
                    </div>
                    <div className="ui toggle checkbox">
                      <input type="checkbox" name="public" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                      <label>Show password</label>
                    </div>
                    <div className="field">
                      <div className="ui icon input">
                        <input style={{ cursor: 'pointer' }} type="button" value="Login" onClick={handleSubmit(data => onLogin(data))} />
                        <i className="right chevron icon" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
      </div>
    </div>

  );
};
