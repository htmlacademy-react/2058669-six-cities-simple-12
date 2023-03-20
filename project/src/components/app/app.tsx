import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/index';
import LoginPage from '../../pages/login/login';
//import PropertyPage from '../../pages/property/property';
import PropertyNotLoggedPage from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
//import PrivateRoute from '../private-routes/private-routes';
import { OfferCard } from '../../types/offers';
import { ReviewCard } from '../../types/reviews';

type AppPlacesFoundProps = {
  placesCount: number;
  offers: OfferCard;
  reviews: ReviewCard;
}

function App({placesCount, offers, reviews}:AppPlacesFoundProps):JSX.Element {
  const offer = offers;
  const review = reviews;
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                placesCount={placesCount}
                offers={offer}
                reviews={review}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Room}
            element={

              <PropertyNotLoggedPage/>

            }
          />
          <Route
            path="*"
            element={<NotFoundScreen/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
