import React from "react";
import Home from './Pages/Home'
import About from './Pages/About'
import Work from './Pages/Work'
import { GlobalStyles } from "./globalstyles";
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
function App() {
  return (
    <div className="App">
     <Router>
     <GlobalStyles/>
     <AnimatePresence>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/about'  component={About}/>
       <Route path='/work'  component={Work}/>
     </Switch>
     </AnimatePresence>
     </Router>
    </div>
  );
}

export default App;
