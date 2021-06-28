import React from "react";
// import {Header,HeroSection} from './Components/default'
import Home from './Pages/Home'
import About from './Pages/About'
import { GlobalStyles } from "./globalstyles";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
     <GlobalStyles/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about'  component={About}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
