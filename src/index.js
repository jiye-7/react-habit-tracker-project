import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import HabitPresenter from './habit_presenter';

const habitPresenter = new HabitPresenter([
  { id: 1, name: 'Reading', count: 0 },
  { id: 2, name: 'Running', count: 0 },
  { id: 3, name: 'Coding', count: 0 },
]);

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>
);
