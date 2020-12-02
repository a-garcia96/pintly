import React from 'react';
import DocumentMeta from 'react-document-meta';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './Components/scrollToTop/scrollToTop';

//IMPORT PAGES FOR ROUTE
import Home from './Pages/Home/Home';
import Beers from './Pages/Beers/Beers';
import Breweries from './Pages/Breweries/Breweries';


function App() {
  const meta = {
    title: 'Pintly App',
    description: 'Learn about Beers and Breweries',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react, beers, pint, app, brewery, brewerydb',
        viewport: 'width=device-width, initial-scale=1.0'
      }
    }

  }

  return (
    <DocumentMeta {...meta}>
      <Router>
        <ScrollToTop />
        <Route path="/" exact component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/breweries" component={Breweries} />
      </Router>
    </DocumentMeta>
  );
}

export default App;