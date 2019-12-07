import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Launches from  './components/Launches';
import Launch from  './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}> {/*needs to be most outer element */}
      <Router>
        <div className="App">
          <h1 className="display-4 my-3">Spacex Informational Site</h1>
          <Route exact path="/" component={Launches} />
          <Route path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
