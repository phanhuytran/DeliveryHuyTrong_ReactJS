import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyAbout from './component/about/BodyAbout';
import BodyContact from './component/contact/BodyContact';
import BodyIndex from './component/index/BodyIndex';
import Footer from './component/item-base/Footer';
import Header from './component/item-base/Header';
import BodyOrder from './component/list-orders/BodyOrder';
import BodyOrderAuction from './component/order-auction/BodyOrderAuction';
import BodyPricing from './component/pricing/BodyPricing';
import BodyShipperDetail from './component/shipper-detail/BodyShipperDetail';
import BodyShipper from './component/shipper/BodyShipper';
import SignInSignUp from './component/signIn-signUp/SignInSignUp';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={BodyIndex} />
            <Route path="/about" component={BodyAbout} />
            <Route path="/list-orders" component={BodyOrder} />
            <Route path="/order-auction" component={BodyOrderAuction} />
            <Route path="/shipper" component={BodyShipper} />
            <Route path="/shipper-detail" component={BodyShipperDetail} />
            <Route path="/pricing" component={BodyPricing} />
            <Route path="/contact" component={BodyContact} />
            <Route path="/signin-signup" component={SignInSignUp} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
