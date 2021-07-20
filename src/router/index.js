import routes from './config';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

/*一级路由*/
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => {
            return(
              <Route path={route.path} exact key={i} component={route.component}></Route>
            )
            }
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;