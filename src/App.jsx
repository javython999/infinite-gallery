import React from 'react';
import './App.css'
import ImageRender from './components/imageRender/imageRender';


const url = 'https://source.unsplash.com/random/'
// const url = 'https://source.unsplash.com/featured/?water'
function App() {
  return (
    <div className="App">
      <ImageRender url={url}/>
    </div>
  );
}

export default App;
