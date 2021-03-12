import React from 'react';
import './App.css';
import Header from './Components/Header'
import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'
import {Provider} from './Context'

function App() {
  return (
    <Provider>
      <div className='app-container'>
         <Header></Header>
        <Addtodo></Addtodo>
        <Todos></Todos>

      </div>
    </Provider>  
  );
}

export default App;
