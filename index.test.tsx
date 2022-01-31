import React from "react";
import ReactDOM from "react-dom";
import App from './src/App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

jest.mock("react-dom", () => ({ render: jest.fn() }));

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

test("renders with App and root div", () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  
    require("./src/index");
  
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
      </React.StrictMode>,
      root
    );
  });
  