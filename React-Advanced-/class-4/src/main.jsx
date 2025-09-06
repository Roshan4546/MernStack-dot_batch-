import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { CartStore } from './redux/slice/CartStore.jsx'; // use the exported store
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={CartStore}>
      <App />
    </Provider>
  </BrowserRouter >
);
