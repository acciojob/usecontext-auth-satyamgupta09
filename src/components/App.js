import React from "react";
import AuthContext from "./AuthContext";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <AuthContext />
    </div>
  );
};

export default App;
