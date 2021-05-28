import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import Concerts from './pages/Concerts';
import Music from './pages/Music';
import ContactUs from './pages/ContactUs';
import BreakingTheAsymptote from './pages/ConcertSubpages/BreakingTheAsymptote';
import StoreProvider from './utils/store';

function App() {
  return (
    <StoreProvider>
      <Router basename="/">
        <div>
          <Route exact path="/"><Home /></Route>
          <Route path="/aboutus"><AboutUs /></Route>
          <Route path="/pricing"><Pricing /></Route>
          <Route exact path="/concerts"><Concerts /></Route>
          <Route path="/concerts/breakingtheasymptote"><BreakingTheAsymptote /></Route>
          <Route path="/music"><Music /></Route>
          <Route path="/contactus"><ContactUs /></Route>
          <Route path="/about"> 
            <h1>OMFG</h1>
          </Route>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
