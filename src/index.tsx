import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import App from "./App";
import theme from "./theme";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({uri: 'http://localhost:4000/graphql'});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.querySelector("#root")
);