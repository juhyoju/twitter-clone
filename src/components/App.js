import React, {useEffect, useState} from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import Auth from "routes/Auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
 
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        
        setUserObj({
          displayName:user.displayName,
          uid:user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    }) 
  };
  return (
  <>
    {init ? (
      <AppRouter 
        refreshUser = {refreshUser}
        isLoggedIn = {Boolean(userObj)}
        userObj = {userObj} 
      /> 
    ) : (
      "Initializing..."
    )}
    {/* <footer>&copy; {new Date().getFullYear()} TwitterClone</footer> */}
  </>
  );
}

export default App;
