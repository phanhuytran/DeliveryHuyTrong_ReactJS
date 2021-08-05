import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyAbout from './Component/about/BodyAbout';
import BodyContact from './Component/contact/BodyContact';
import BodyIndex from './Component/index/BodyIndex';
import Footer from './Component/item-base/Footer';
import Header from './Component/item-base/Header';
import BodyOrder from './Component/list-orders/BodyOrder';
import BodyOrderAuction from './Component/order-auction/BodyOrderAuction';
import BodyPricing from './Component/pricing/BodyPricing';
import BodyShipperDetail from './Component/shipper-detail/BodyShipperDetail';
import BodyShipper from './Component/shipper/BodyShipper';
import SignInSignUp from './Component/signIn-signUp/SignInSignUp';

class App extends Component {
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
