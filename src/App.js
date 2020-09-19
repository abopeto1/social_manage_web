import React, {useState} from 'react';
// import { Layout } from './Pages/Layout'
import 'antd/dist/antd.min.css'
import {Login} from "./Pages/Login";
import {HomePage} from "./Pages/HomePage"

function App() {
  const [name, setName] = useState(null)

  return (
    <div className="App">
        {
            name ? <HomePage /> : <Login setName={setName}/>
        }
    </div>
  );
}

export default App;
