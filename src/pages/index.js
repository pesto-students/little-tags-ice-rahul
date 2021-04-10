import React from 'react';
import Home from './Home';
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
  return (
    <div className="Container">
      <Header type={headerProp.type} bgColor={headerProp.bgColor} isLoggedIn={headerProp.isLoggedIn} />
      <div className="body">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
