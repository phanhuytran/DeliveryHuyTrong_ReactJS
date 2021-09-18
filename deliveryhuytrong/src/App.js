import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookies from 'react-cookies';
import qs from 'qs';
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
import axios from 'axios';
import Forbidden_403 from './component/item-base/403_Forbidden';

export let UserContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  // const [oath2Info, setOath2Info] = useState([]);
  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   async function getOath2Info() {
  //     let res = await AuthAPI.get(endpoints['oauth2-info']);
  //     setOath2Info(res.data);
  //   }
  //   getOath2Info();
  // }, []);

  const login = async (username, password) => {
    await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/o/token/',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }, data: qs.stringify({
        // 'client_id': oath2Info.client_id,
        // 'client_secret': oath2Info.client_secret,
        'client_id': 'GAoIoyXnX6pX6SwLNxeFWmcSyFY7lRfnDzKEDJDI',
        'client_secret': 'jszRNc5BqGwiJ4bt8a2JixeCEWUb2OiAm2cxYbWatnClTfNRWn8IgBy8nOP57wluThd3qiKdn4xUtko8nySFWxjS2TfiH9HlyUzee4s99srowoQ1UQ9t4ccdb2HnDSMe',
        'username': username,
        'password': password,
        'grant_type': 'password',
      })
    }).then((res) => {
      console.log(res);
      setMessage(true);
      cookies.save("access_token", res.data.access_token);
    }).catch((err) => {
      console.log(err.response.data);
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
    <UserContext.Provider value={{ user, login, message }}>
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
                  : <Route path="/statistic" exact={true} component={Forbidden_403} />
              }
              {
                cookies.load("user").groups[0] === 2 || cookies.load("user").username === 'admin'
                  ? <Route path="/list-orders" exact={true} component={BodyOrder} />
                  : <Route path="/list-orders" exact={true} component={Forbidden_403} />
              }
              {
                cookies.load("user").groups[0] === 2 || cookies.load("user").username === 'admin'
                  ? <Route path="/order-auction/:id" exact={true} component={(props) => (<BodyOrderAuction props={props} />)} />
                  : <Route path="/order-auction/:id" exact={true} component={Forbidden_403} />
              }
              <Route path="/shipper" exact={true} component={BodyShipper} />
              <Route path="/shipper-detail/:id" exact={true} component={(props) => (<BodyShipperDetail props={props} />)} />
              {/* {
                cookies.load("user").groups[0] === 1
                  ? <Route path="/post" exact={true} component={BodyPost} />
                  : <Route path="/post" exact={true} component={Forbidden_403} />
              } */}
              <Route path="/post" exact={true} component={BodyPost} />
              {
                cookies.load("user").groups[0] === 1
                  ? <Route path="/post-detail/:id" exact={true} component={(props) => (<BodyPostDetail props={props} />)} />
                  : <Route path="/post-detail/:id" exact={true} component={Forbidden_403} />
              }
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