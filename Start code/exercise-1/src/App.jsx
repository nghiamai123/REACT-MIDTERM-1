import React, { useState } from "react";

export const userData = {
  firstName: "Ronan", // feel free to replace the name value
  lastName: "Ogor", // feel free to replace the name value
  title: "PN React JS Killer", // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  const { firstName, lastName, title } = userData;

  return (
    <div id="user" data-testid="user">
      <h2>{firstName + " " + lastName}</h2>
      <p>{title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
