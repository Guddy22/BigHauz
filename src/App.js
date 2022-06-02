import React from 'react';
import Nav from './Components/Nav';
import Carousel from './Components/Carousel';
import ServicesList from './Components/ServicesList';
import SectionHeader from './Components/SectionHeader';
import Footer from './Components/Footer';
import About from './Components/About';


import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact'





function App() {
  return (
<Router>
    <Nav />
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
      <Route path='/gallery'>
        <Gallery />
      </Route>
      <Route exact path='/'>
          <Home />
      </Route>
    </Switch>
    <Footer/>
</Router>
 );
}

export default App;
