import { StrictMode } from 'react';
import { App } from './app/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../src/app/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
