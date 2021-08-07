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

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={BodyIndex} />
            <Route exact path="/about" component={BodyAbout} />
            <Route exact path="/list-orders" component={BodyOrder} />
            <Route exact path="/order-auction" component={BodyOrderAuction} />
            <Route exact path="/shipper" component={BodyShipper} />
            <Route exact path="/shipper-detail" component={BodyShipperDetail} />
            <Route exact path="/pricing" component={BodyPricing} />
            <Route exact path="/contact" component={BodyContact} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
