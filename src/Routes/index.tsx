import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Store/store';
import DataProvider from '../Contexts/DataContext';

import Home from '../Pages/Home';


const Routes: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Provider store={store} >
        <DataProvider>
          <PersistGate loading={null} persistor={persistor}>
            
            <Route exact path="/" component={Home} />
            
          </PersistGate>
        </DataProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Routes;
