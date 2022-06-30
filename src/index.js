import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import BookProvider from './components/bookStoreService-context/bookStore-services';
import {BrowserRouter as Router} from 'react-router-dom'
import ErrorBoundry from './components/error-boundry/error-boundry';
import BooksStoreService from './services/bookStore-services'
import {Provider} from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookProvider value={BooksStoreService}>
        <Router>
          <App></App>
        </Router>
      </BookProvider>
    </ErrorBoundry>
  </Provider>
);