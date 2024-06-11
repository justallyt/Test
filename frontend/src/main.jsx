import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom"
const client = new ApolloClient({
     uri: '/api',
     cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <ApolloProvider client={client}>
                     <BrowserRouter>
                             <App />
                     </BrowserRouter>
            </ApolloProvider>
  </React.StrictMode>,
)