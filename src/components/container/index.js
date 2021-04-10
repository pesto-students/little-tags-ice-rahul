import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './container.scss';

const Container = (OriginalComponent, header = { type:'fixed' }) => {
    const { type } = header;
    return (
        <div className="Container">
            <Header type={type} />
            <div className="body">
                <OriginalComponent />
            </div>
            <Footer />
        </div>
    )
}

export default Container;