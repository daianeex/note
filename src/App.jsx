import React from "react";
import { useState } from "react";
import Routes from "./Routes";

function App(){

  const [user, setUser] = useState(null);

/*  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName
    }

    setUser(newUser)
  }
/*  if(user === null){
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    )
  }*/
  return (    
      <Routes />
    );
}

export default App;

