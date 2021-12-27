import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider, GameProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
