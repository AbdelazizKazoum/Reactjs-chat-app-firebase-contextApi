import { createContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../file";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        console.log(user);
      });
    }, []);

  return (<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
    {props.children}
  </AuthContext.Provider>);
};

export default AuthContext;
