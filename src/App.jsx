import React from 'react';
import './App.css';

function App() {

  const handleClick = () => {

    window.location.href = 'https://swap.onedex.app/swap?firstToken=EGLD&secondToken=PADAWAN-a17f58';
  };


  const fullScreenDivStyle = {
    position: 'fixed',
    top: 0,       
    left: 0,         
    width: '100vw',  
    height: '100vh',  
    backgroundColor: 'transparent',
    cursor: 'pointer',
    zIndex: 1000,     
  };

  return (
    <div>
      <div style={fullScreenDivStyle} onClick={handleClick}></div>
    </div>
  );
}

export default App;
