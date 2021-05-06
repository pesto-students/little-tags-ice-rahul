import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setDrawerState } from '../../actions';
import { DRAWER } from '../../constants';

function ScrollToTop( props ) {
    let location = useLocation();
    useEffect( () => {
        window.scrollTo(0, 0);
        props.setDrawerState(DRAWER.CLOSE)
    }, [location, props] );

    return props.children
}

export default connect(null,{ setDrawerState })(ScrollToTop);