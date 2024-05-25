import React from 'react';
import {ALL_PNV_TEACHERS} from "./data.js";
import Card from "./components/Card";
function App() {
  return <>
  <div className='contain'>
  {
    ALL_PNV_TEACHERS.map((teacher) => (
      <Card teacher={teacher} key={teacher.id} className="con"/>
    ))
  }
  </div>
  </>;
}

export default App;
