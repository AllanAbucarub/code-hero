import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Listing from './pages/Listing';
import Details from './pages/Details';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Listing} />
        <Route path="/details" component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
