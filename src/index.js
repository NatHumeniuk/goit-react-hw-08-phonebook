import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from 'store/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <React.StrictMode>
        <App />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
