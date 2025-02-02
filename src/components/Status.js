import React, { useContext } from "react";
import { AuthenticationContext } from "./AuthContext";

export default function Status() {
  const isAuthenticated = useContext(AuthenticationContext);
  return (
    <div>
     <p className="authText">
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'You are not authenticated'}
      </p>
    </div>
  );
}
