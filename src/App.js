import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './Global/Navbar';
import Navbar1 from './Global/Navbar1';
import Login from './Global/Login';

import Footer from './Global/Footer';

import MenuToday from './Body/MenuToday';
import MenuFuture from './Body/MenuFuture';
import Buddies from './Body/Buddies';

import { useState } from 'react';

function App() { 
  const [toggle, setToggle] = useState(0); 
  const [canteenId, setCanteenId] = useState('INBA')

  const selectCanteen = (canteenId) => {
    console.log(canteenId)
    setCanteenId(canteenId)
    // this.setState({"canteenId" : canteenId })
    console.log('canteenId', canteenId)
  }

  //For Login
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState('');


    return (
    <div className="App">
  
      <header style={{marginBottom: '10px'}}> 
      
        <Navbar selectCanteen={selectCanteen} userName={userName} />
        <Navbar1 toggle={toggle} setToggle={setToggle} />
      </header>
      
      <main  >
      
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Welcome' />
          </Route>

          <Route path="/Welcome">
            <MenuToday canteenId={canteenId} />
          </Route>

          <Route path="/Login">
          {!token 
          ? <Login setToken={setToken} userName={userName} setUserName={setUserName} /> 
          : <Redirect to='/Welcome' />}
          </Route>

          <Route path='/Future'>
            <MenuFuture />
          </Route>

          <Route path='/Buddies'>
            <Buddies />
          </Route>
        
        </Switch>
      </main>  
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
