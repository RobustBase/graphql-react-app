import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Posts from "./Posts";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          React and GraphQL - Sample Application
        </a>
      </nav>
      <div>
        <Posts />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
