import React from "react";
import Dashboard from "./Containers/Dashboard";
import { Provider } from "react-redux";
import { store } from "./Redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
      <ToastContainer position="top-center" autoClose={2000} />
    </Provider>
  );
};

export default App;
