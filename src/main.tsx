import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI as string,
  cache: new InMemoryCache(),
});

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
