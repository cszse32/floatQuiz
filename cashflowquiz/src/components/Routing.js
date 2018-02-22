import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Start from './Start';
import Welcome from './Welcome';

function Routing() {
  return(
    <Router>
      <div>

        <Switch>
          <Route exact path='/' component={Start} />
          <Route exact path='/quiz' component={Welcome} />

          </Switch>
      </div>
    </Router>

  );
}

export default Routing;
