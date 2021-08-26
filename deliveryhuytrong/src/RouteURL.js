import React from 'react';
import BodyAbout from './component/about/BodyAbout';
import BodyContact from './component/contact/BodyContact';
import BodyIndex from './component/index/BodyIndex';
import PageNotFound from './component/item-base/PageNotFound';
import BodyOrder from './component/list-orders/BodyOrder';
import BodyOrderAuction from './component/order-auction/BodyOrderAuction';
import BodyPost from './component/post/BodyPost';
import BodyPricing from './component/pricing/BodyPricing';
import BodyShipperDetail from './component/shipper-detail/BodyShipperDetail';
import BodyShipper from './component/shipper/BodyShipper';
import BodyStatistic from './component/statistic/BodyStatistic';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <BodyIndex />
    }, {
        path: "/statistic",
        exact: true,
        main: () => <BodyStatistic />
    }, {
        path: "/about",
        exact: true,
        main: () => <BodyAbout />
    }, {
        path: "/list-orders",
        exact: true,
        main: () => <BodyOrder />
    }, {
        path: "/order-auction/:id",
        exact: true,
        main: (props) => <BodyOrderAuction props={props} />
    }, {
        path: "/shipper",
        exact: true,
        main: () => <BodyShipper />
    }, {
        path: "/shipper-detail/:id",
        exact: true,
        main: (props) => <BodyShipperDetail props={props} />
    }, {
        path: "/pricing",
        exact: true,
        main: () => <BodyPricing />
    }, {
        path: "/contact",
        exact: true,
        main: () => <BodyContact />
    }, {
        path: "/post",
        exact: true,
        main: () => <BodyPost />
    }, {
        path: "",
        exact: true,
        main: () => <PageNotFound />
    }
];

export default routes;