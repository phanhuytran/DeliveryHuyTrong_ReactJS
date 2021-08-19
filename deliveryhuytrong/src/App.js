import React from 'react';
import routes from './RouteURL';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/item-base/Footer';
import Header from './component/item-base/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            {this.showMenu(routes)}
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
  
  showMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return result;
  }
}

export default App;