import React from 'react';
import {items} from "./data.js";
import Card from "./components/Card";
function App() {
  return <>
  <div className='contain'>
  {
    items.map((item) => (
      <Card item={item} key={item.id} className="con"/>
    ))
  }
  </div>
  </>;
}

export default App;
