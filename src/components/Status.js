import React, { useContext } from "react";
import { AuthenticationContext } from "./AuthContext";

export default function Status() {
  const isAuthenticated = useContext(AuthenticationContext);
  return (
    <div>
     {isAuthenticated ? (
        <p className="authText">You are now authenticated, you can proceed</p>
      ) : (
        <p className="authText">you are not authenticated</p>
      )}
    </div>
  );
}
