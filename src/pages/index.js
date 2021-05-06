import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Product from './Product';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Delivery from './Delivery';
import AddAddress from './AddAddress';
import Payment from './Payment';
import Thanks from './Thanks';
import PastOrders from './PastOrders';
import { HEADER } from '../constants';
import withAuthentication from '../components/Session/withAuthentication'
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
      <Router>
        <Header type={headerConfig.type} bgColor={headerConfig.bgColor} isLoggedIn={headerConfig.isLoggedIn} />
        <div className="body">
            <Switch>
              <Route path="/product/:category">
                <Product/>
              </Route>
              <Route path="/product">
                <Product/>
              </Route>
              <Route path="/product-detail/:id">
                <ProductDetail />
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
              <Route path="/delivery">
                <Delivery/>
              </Route>
              <Route path="/add-address">
                <AddAddress />
              </Route>
              <Route path="/payment/:id">
                <Payment />
              </Route>
              <Route path="/past-orders">
                <PastOrders />
              </Route>
              <Route path="/thanks">
                <Thanks />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>          
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default withAuthentication(App);
