import MainPage from '../../pages/index';

type AppPlacesFoundProps = {
  placesCount: number;
}

function App({placesCount}:AppPlacesFoundProps):JSX.Element {
  return(
    <MainPage placesCount={placesCount}></MainPage>
  );
}

export default App;
