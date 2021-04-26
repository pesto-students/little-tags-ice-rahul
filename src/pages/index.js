import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Product from './Product';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HEADER } from '../constants';
import '../global/styles/common.scss';

const headerProp = {
  type: HEADER.TYPE.FLOATING,
  bgColor: HEADER.BACKGROUND.TRANSPARENT,
  isLoggedIn: false
}

const App = () => {
  const [headerConfig, setHeaderConfig] = useState(headerProp)
  useEffect(()=>{
    const currentPath = window.location.pathname;
    if(currentPath !== '/'){
      setHeaderConfig({
        ...headerProp,
        type: HEADER.TYPE.FIXED,
        bgColor: HEADER.BACKGROUND.WHITE
      })
    }
  }, [])
  return (
    <div className="Container">
      <Header type={headerConfig.type} bgColor={headerConfig.bgColor} isLoggedIn={headerConfig.isLoggedIn} />
      <div className="body">
        <Router>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>          
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
