import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import ImageSplashPage from './components/splash'
import MainPage from './components'
import configureStore from './store';
import ContentPage from './components/content'
const store = configureStore();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.Fragment>
          <Route exact={true} path={"/imagesplash"} component={ImageSplashPage} />
          <Route exact={true} path={"/"} component={MainPage} />
          <Route exact={true} path={"/content"} component={ContentPage} />
        </React.Fragment>
      </Provider>
    </BrowserRouter>
  );
  // }
}

export default App;
