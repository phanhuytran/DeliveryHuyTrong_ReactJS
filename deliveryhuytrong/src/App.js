import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookies from 'react-cookies';
import axios from 'axios';
import qs from 'qs';
import Footer from './component/item-base/Footer';
import Header from './component/item-base/Header';
import API, { endpoints } from './component/API';
import BodyHome from './component/home/BodyHome';
import BodyOrder from './component/list-orders/BodyOrder';
import BodyOrderAuction from './component/order-auction/BodyOrderAuction';
import BodyStatistic from './component/statistic/BodyStatistic';
import BodyAbout from './component/about/BodyAbout';
import BodyShipper from './component/shipper/BodyShipper';
import BodyPricing from './component/pricing/BodyPricing';
import BodyContact from './component/contact/BodyContact';
import BodyShipperDetail from './component/shipper-detail/BodyShipperDetail';
import BodyPost from './component/post/BodyPost';
import BodyPostDetail from './component/post-detail/BodyPostDetail';
import AuthorizationRequired_401 from './component/item-base/401_AuthorizationRequired';
import PermissionDenied_403 from './component/item-base/403_PermissionDenied';
import PageNotFound_404 from './component/item-base/404_PageNotFound';

export let UserContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [openLoadingLogin, setOpenLoadingLogin] = useState(false);

  const login = async (username, password) => {
    // let oath2Info = await API.get(endpoints['oauth2-info']);
    await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/o/token/',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      }, data: qs.stringify({
        // 'client_id': oath2Info.client_id,
        // 'client_secret': oath2Info.client_secret,
        'client_id': 'fGB8Dw4LisdjAjNUdWhL0Howw25DZ39LiRdTUTro',
        'client_secret': 'TVZDBuqShhQXxwkrQW6aextygWGIFHX4RjIJWgdo9MOKIJI1xCGWrNz3bWbaV5oaYFgcp3hiI8krwOBqWEmP3zEW5FkEoxsFBse39ozudGaxL7o08UIcRdSGU99puoSW',
        'username': username,
        'password': password,
        'grant_type': 'password',
      })
    }).then((res) => {
      console.log(res);
      setMessage(true);
      setOpenLoadingLogin(false);
      cookies.save("access_token", res.data.access_token);
    }).catch((err) => {
      console.log(err.response);
      setOpenLoadingLogin(false);
      setMessage(false);
    })

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
    <UserContext.Provider value={{ user, setUser, login, message, setMessage, openLoadingLogin, setOpenLoadingLogin }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={BodyHome} />
          <Route path="/about" exact={true} component={BodyAbout} />
          <Route path="/pricing" exact={true} component={BodyPricing} />
          <Route path="/contact" exact={true} component={BodyContact} />
          {
            user ? <Switch>
              {
                cookies.load("user").username === 'admin'
                  ? <Route path="/statistic" exact={true} component={BodyStatistic} />
                  : <Route path="/statistic" exact={true} component={PermissionDenied_403} />
              }
              {
                cookies.load("user").groups[0] === 2 || cookies.load("user").username === 'admin'
                  ? <Route path="/list-orders" exact={true} component={BodyOrder} />
                  : <Route path="/list-orders" exact={true} component={PermissionDenied_403} />
              }
              {
                cookies.load("user").groups[0] === 2 || cookies.load("user").username === 'admin'
                  ? <Route path="/order/:id/auction" exact={true} component={(props) => (<BodyOrderAuction props={props} />)} />
                  : <Route path="/order/:id/auction" exact={true} component={PermissionDenied_403} />
              }
              <Route path="/shipper" exact={true} component={BodyShipper} />
              {
                cookies.load("user").groups[0] === 1
                  ? <Route path="/shipper-detail/:id" exact={true} component={(props) => (<BodyShipperDetail props={props} />)} />
                  : <Route path="/shipper-detail/:id" exact={true} component={PermissionDenied_403} />
              }
              <Route path="/post" exact={true} component={BodyPost} />
              {
                cookies.load("user").groups[0] === 1
                  ? <Route path="/post-detail/:id" exact={true} component={(props) => (<BodyPostDetail props={props} />)} />
                  : <Route path="/post-detail/:id" exact={true} component={PermissionDenied_403} />
              }
              <Route path="" exact={true} component={PageNotFound_404} />
            </Switch> : <Switch>
              <Route path="/statistic" exact={true} component={AuthorizationRequired_401} />
              <Route path="/list-orders" exact={true} component={AuthorizationRequired_401} />
              <Route path="/order/:id/auction" exact={true} component={AuthorizationRequired_401} />
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