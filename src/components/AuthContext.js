import React, { createContext, useState } from "react";
import Status from "./Status";
export const AuthenticationContext = createContext();

export default function AuthContext() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.checked);
    setIsAuthenticated(e.target.checked);
  };
  return (
    <div>
      <AuthenticationContext.Provider value={isAuthenticated}>
        <Status />
      </AuthenticationContext.Provider>
      <input type="checkbox" onChange={handleChange} />
      <label>I'm not a robot</label>
    </div>
  );
}
