import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Container from "./components/Notification/Container";
import { combineReducer } from "./components/reducers/combineReducer";
import Router from "./components/router/Router";

const store = configureStore({reducer:combineReducer});

function App() {
  return (<>
    <Provider store={store}>
      <Router />
      <Container/>
    </Provider>
  </>);
}

export default App;
