import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import { Homepage } from './containers'


class App extends React.Component{
  render(){
    return(
      <Homepage/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);