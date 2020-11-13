import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//IMPORT PAGES FOR ROUTE
import Home from './Pages/Home/Home';
import Beers from './Pages/Beers/Beers';
import Breweries from './Pages/Breweries/Breweries';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/beers" component={Beers}/>
      <Route path="/breweries" component={Breweries} />
    </Router>
  );
}

export default App;