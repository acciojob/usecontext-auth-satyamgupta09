import React, { useContext } from "react";
import { AuthenticationContext } from "./AuthContext";

export default function Status() {
  const isAuthenticated = useContext(AuthenticationContext);
  return (
    <div>
      {isAuthenticated ? (
        <p>You are now authenticated, you can proceed</p>
      ) : (
        <p>you are not authenticated</p>
      )}
    </div>
  );
}
