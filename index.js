import './styles/common.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import RootContainer from './containers/rootContainer'


window.apps = window.apps || {};

window.apps.root = function() {
    const Root = () => (
        <RootContainer>
            <App />
        </RootContainer>
    )
    ReactDOM.render(<Root />, document.getElementById('root'));
};
