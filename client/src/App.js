import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from  './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <h1 className="display-4 my-3">Spacex Informational Site</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
