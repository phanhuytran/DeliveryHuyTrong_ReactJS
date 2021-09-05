import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookies from 'react-cookies';
import Footer from './component/item-base/Footer';
import Header from './component/item-base/Header';
import API, { endpoints } from './component/API';
import BodyHome from './component/home/BodyHome';
import BodyOrder from './component/list-orders/BodyOrder';
import BodyOrderAuction from './component/order-auction/BodyOrderAuction';
import BodyStatistic from './component/statistic/BodyStatistic';
import BodyAbout from './component/about/BodyAbout';
import PageNotFound_404 from './component/item-base/404_PageNotFound';
import AuthorizationRequired_401 from './component/item-base/401_AuthorizationRequired';
import BodyShipper from './component/shipper/BodyShipper';
import BodyPricing from './component/pricing/BodyPricing';
import BodyContact from './component/contact/BodyContact';
import BodyShipperDetail from './component/shipper-detail/BodyShipperDetail';
import BodyPost from './component/post/BodyPost';
import BodyPostDetail from './component/post-detail/BodyPostDetail';

export let UserContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  // const [message, setMessage] = useState('');

  const login = async (username, password) => {
    let res = await API.post(endpoints['login'], {
      'client_id': 'tgnUoY0SERab0qLgk7sLLVeg4cLAkX6u03vQKFM6',
      'client_secret': 'vJPDDldC54M4r5lLDHOQIqW7qyj000kZiCI4XbQUefOQUbsJEgcwXXnxaxIrKgb365uLbXaoOc7Ew9qYTkD6svpqByd2GMDjrDqmyjwM02XQmI6If9y0E9JCjfAASDeS',
      'username': username,
      'password': password,
      'grant_type': 'password'
    })
    // if (!username && !password) {
    //   setMessage('Username or password is incorrect!')
    // }
    cookies.save("access_token", res.data.access_token);
    let user = await API.get(endpoints['current-user'], {
      headers: {
        'Authorization': `Bearer ${cookies.load('access_token')}`
      }
    });
    cookies.save("user", user.data);
    setUser(user);
    window.location.reload();
  }

  if (user == null && cookies.load("access_token") != null) {
    const acc = async () => {
      let user = await API.get(endpoints['current-user'], {
        headers: {
          'Authorization': `Bearer ${cookies.load('access_token')}`
        }
      });
      setUser(user);
    }
    acc();
  }

  return (
    <UserContext.Provider value={{ user, login }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={BodyHome} />
          <Route path="/about" exact={true} component={BodyAbout} />
          <Route path="/pricing" exact={true} component={BodyPricing} />
          <Route path="/contact" exact={true} component={BodyContact} />
          {
            user ? <Switch>
              <Route path="/statistic" exact={true} component={BodyStatistic} />
              <Route path="/list-orders" exact={true} component={BodyOrder} />
              <Route path="/order-auction/:id" exact={true} component={(props) => (<BodyOrderAuction props={props} />)} />
              <Route path="/shipper" exact={true} component={BodyShipper} />
              <Route path="/shipper-detail/:id" exact={true} component={(props) => (<BodyShipperDetail props={props} />)} />
              <Route path="/post" exact={true} component={BodyPost} />
              <Route path="/post-detail/:id" exact={true} component={(props) => (<BodyPostDetail props={props} />)} />
              <Route path="" exact={true} component={PageNotFound_404} />
            </Switch> : <Switch>
              <Route path="/statistic" exact={true} component={AuthorizationRequired_401} />
              <Route path="/list-orders" exact={true} component={AuthorizationRequired_401} />
              <Route path="/order-auction/:id" exact={true} component={AuthorizationRequired_401} />
              <Route path="/shipper" exact={true} component={AuthorizationRequired_401} />
              <Route path="/shipper-detail/:id" exact={true} component={AuthorizationRequired_401} />
              <Route path="/post" exact={true} component={AuthorizationRequired_401} />
              <Route path="/post-detail/:id" exact={true} component={AuthorizationRequired_401} />
              <Route path="" exact={true} component={PageNotFound_404} />
            </Switch>
          }
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}