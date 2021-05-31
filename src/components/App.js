import React, {useState} from "react";
import { Router } from "react-router";
import AppRouter from "components/Router";
import { autoService } from "fbase";

function App() {
  console.log(autoService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(autoService.currentUser);
  return (
  <>
    <AppRouter isLoggedIn = {isLoggedIn} />
    <footer>&copy; {new Date().getFullYear()} TwitterClone</footer>
  </>
  );
}

export default App;
