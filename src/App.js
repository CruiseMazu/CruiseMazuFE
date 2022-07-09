import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React, { useState } from "react";

const GRAPHQL_PORT = process.env.GRAPHQL_PORT;

export const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: GRAPHQL_PORT,
  });

  const [counter, setCounter] = useState(0);

  return (
    <ApolloProvider client={client}>
      <div>
        <h1> Welcome to CruiseMazu! </h1>
        <p> You are successfully running it on your machine.</p>
        <div>Counter: {counter} </div>
        <button
          onClick={() =>
            setCounter((prevCount) => {
              return prevCount + 1;
            })
          }
        >
          Increment!
        </button>
        <button
          onClick={() =>
            setCounter((prevCount) => {
              return prevCount - 1;
            })
          }
        >
          Decrement!
        </button>
        <p>
          <b>GraphQL Port:</b> {GRAPHQL_PORT}
        </p>
      </div>
    </ApolloProvider>
  );
};
