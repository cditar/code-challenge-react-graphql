import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import client from './clients/client';
import { Cards } from './screens/Home/Cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Cards />
    </ApolloProvider>
  </React.StrictMode>
);

