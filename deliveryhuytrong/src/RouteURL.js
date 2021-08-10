import React from 'react';
import BodyAbout from './component/about/BodyAbout';
import BodyContact from './component/contact/BodyContact';
import BodyIndex from './component/index/BodyIndex';
import PageNotFound from './component/item-base/PageNotFound';
import BodyOrder from './component/list-orders/BodyOrder';
import BodyOrderAuction from './component/order-auction/BodyOrderAuction';
import BodyPricing from './component/pricing/BodyPricing';
import BodyShipperDetail from './component/shipper-detail/BodyShipperDetail';
import BodyShipper from './component/shipper/BodyShipper';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <BodyIndex />
    },
    {
        path: "/about",
        exact: false,
        main: () => <BodyAbout />
    },
    {
        path: "/list-orders",
        exact: false,
        main: () => <BodyOrder />
    },
    {
        path: "/order-auction",
        exact: false,
        main: () => <BodyOrderAuction />
    },
    {
        path: "/shipper",
        exact: false,
        main: () => <BodyShipper />
    },
    {
        path: "/shipper-detail",
        exact: false,
        main: () => <BodyShipperDetail />
    },
    {
        path: "/pricing",
        exact: false,
        main: () => <BodyPricing />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <BodyContact />
    },
    {
        path: "",
        exact: false,
        main: () => <PageNotFound />
    }
];

export default routes;