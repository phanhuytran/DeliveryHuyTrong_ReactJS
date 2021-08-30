import React, { useState } from 'react';
import routes from './RouteURL';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookies from 'react-cookies';
import Footer from './component/item-base/Footer';
import Header from './component/item-base/Header';
import API, { endpoints } from './component/API';

export let UserContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    let res = await API.post(endpoints['login'], {
      'client_id': 'tgnUoY0SERab0qLgk7sLLVeg4cLAkX6u03vQKFM6',
      'client_secret': 'vJPDDldC54M4r5lLDHOQIqW7qyj000kZiCI4XbQUefOQUbsJEgcwXXnxaxIrKgb365uLbXaoOc7Ew9qYTkD6svpqByd2GMDjrDqmyjwM02XQmI6If9y0E9JCjfAASDeS',
      'username': username,
      'password': password,
      'grant_type': 'password'
    })
    cookies.save("access_token", res.data.access_token);
    let user = await API.get(endpoints['current-user'], {
      headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
      }
    });
    cookies.save("user", user.data);
    setUser(user);
  }

  return (
    <UserContext.Provider value={{user, login}}>
      <Router>
        <Header />
        <Switch>
          {showMenu(routes)}
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );

  function showMenu(routes) {
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