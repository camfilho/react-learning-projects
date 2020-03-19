import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './Calculator';

class App extends React.Component {
    render () {
        return <Calculator />
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
  });