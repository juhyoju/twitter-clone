import React, {useState} from "react";
import { Router } from "react-router";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
  <>
    <AppRouter isLoggedIn = {isLoggedIn} />
    <footer>&copy; {new Date().getFullYear()} TwitterClone</footer>
  </>
  );
}

export default App;
