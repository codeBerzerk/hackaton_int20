import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import NotificationContainer from "./components/notification/NotificationContainer";
import { combineReducer } from "./components/reducers/combineReducer";
import Router from "./components/router/Router";

const store = configureStore({reducer:combineReducer});

function App() {
  return (<>
    <Provider store={store}>
      <Router />
      <NotificationContainer/>
    </Provider>
  </>);
}

export default App;
