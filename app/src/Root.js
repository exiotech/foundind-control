import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import drizzleOptions from "./drizzleOptions";
import App from "./App";

class Root extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <App />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default Root;
