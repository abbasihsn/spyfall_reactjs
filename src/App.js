import React, { useState } from "react";
import SpyfallGame from "./SpyfallGame";
import LoginPage from "./LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <SpyfallGame />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
