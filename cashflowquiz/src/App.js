import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Routing from './components/Routing';
import Welcome from './components/Welcome';



class App extends Component {
  render() {
    return (

      <div className="App">

          <Routing />
          


      </div>

    );
  }
}

export default App;


/*class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <ul>
                  <li><Link to={'/bla'}>Home</Link></li>
               </ul>

               <Switch>
                  <Route exact path='/bla' component={Welcome} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;
*/
