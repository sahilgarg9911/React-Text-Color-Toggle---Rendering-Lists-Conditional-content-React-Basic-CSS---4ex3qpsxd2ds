import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
  return ( <>
    <div id="main">
      <p className={isActive ? 'redColor ' : 'blueColor'} >Newton School</p>
      <button id='button' onClick={toggleClass}>Change Style</button>
    </div>
  </>
  )
}


export default App;
