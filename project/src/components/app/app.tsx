import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/index';
import LoginPage from '../../pages/login/login';
//import PropertyPage from '../../pages/property/property';
import PropertyNotLoggedPage from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
//import PrivateRoute from '../private-routes/private-routes';

type AppPlacesFoundProps = {
  placesCount: number;
}

function App({placesCount}:AppPlacesFoundProps):JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage placesCount={placesCount}/>}
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
