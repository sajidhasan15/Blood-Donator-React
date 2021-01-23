import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';


function App() {
  return (
    <>

    {/* <Switch> */}
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />

      

    {/* </Switch> */}


    </>
  );
}

export default App;
