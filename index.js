import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import RootContainer from './containers/rootContainer';

import './styles/common.css';


const Root = () => (
    <RootContainer>
        <App />
    </RootContainer>
)
ReactDOM.render(<Root />, document.getElementById('root'));
