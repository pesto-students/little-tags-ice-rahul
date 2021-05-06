import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
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
                <ScrollToTop><Product/></ScrollToTop>
              </Route>
              <Route path="/product">
                <ScrollToTop><Product/></ScrollToTop>
              </Route>
              <Route path="/product-detail/:id">
                <ScrollToTop><ProductDetail /></ScrollToTop>
              </Route>
              <Route path="/cart">
                <ScrollToTop><Cart/></ScrollToTop>
              </Route>
              <Route path="/delivery">
                <ScrollToTop><Delivery/></ScrollToTop>
              </Route>
              <Route path="/add-address">
                <ScrollToTop><AddAddress /></ScrollToTop>
              </Route>
              <Route path="/payment/:id">
                <ScrollToTop><Payment /></ScrollToTop>
              </Route>
              <Route path="/past-orders">
                <ScrollToTop><PastOrders /></ScrollToTop>
              </Route>
              <Route path="/thanks">
                <ScrollToTop><Thanks /></ScrollToTop>
              </Route>
              <Route path="/">
                <ScrollToTop><Home /></ScrollToTop>
              </Route>
            </Switch>          
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default withAuthentication(App);
