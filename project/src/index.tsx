import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const SettingPlaces = {PlacesCount: 312};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={SettingPlaces.PlacesCount}
      offers = {offers[0]}
      reviews = {reviews[0]}
    />
  </React.StrictMode>,
);
