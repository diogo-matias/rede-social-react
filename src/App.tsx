import { Typography } from "@mui/material";

import Router from "./Router";
import Wrapper from "./shared-components/Wrapper";
import axios from "axios";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import { createClient } from "pexels";

// const client = createClient(process?.env?.API_KEY);

// client.photos.show({ id: 2499611 }).then(photo => {console.log(photo)});

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
