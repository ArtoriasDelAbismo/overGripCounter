import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);


  return (
    <div className="App">
        <div className='main-container'>
          <div className='container'>
            <h1 className='title'>OverGrip Counter</h1>
            <div className='counter-container'>
              <button onClick={() => {setCount(count - 1)}} className='button substract-button'>-</button>
              <span className='number'>{count}</span>
              <button onClick={() => {setCount(count + 1)}} className='button add button'>+</button>
            </div><br></br>
            <span className='total'>Total ${count * 500}</span>
          </div>
      </div>
    </div>
  );
}

export default App;

