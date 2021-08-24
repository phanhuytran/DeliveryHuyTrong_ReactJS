// import React, { useState } from 'react';
// import '../shipper.css';
// import { remove } from 'lodash';
// import swal from 'sweetalert';
// import shipperListData from './ShipperListData';
// import { useHistory } from 'react-router-dom';

// export default function RemoveShipper(props) {
//     const [shipperList, setShipperList] = useState(shipperListData);
//     const history = useHistory();

//     function removeShipper(id) {
//         console.log(id)
//         let shipper = shipperList;
//         swal({
//             title: "Do you want to remove this shipper?",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true
//         }).then((willRemove) => {
//             if (willRemove) {
//                 remove(shipper, item => {
//                     return item.id === id;
//                 });
//                 setShipperList(shipper);
//                 swal("This shipper was removed successfully!", { icon: "success" });
//                 history.push("/shipper");
//             } else {
//                 swal("You pressed cancel!", { icon: "warning" });
//             }
//         });
//     }

//     return (
//         <>
//             <span className="see-another-page-2" onClick={() => removeShipper(props)}>
//                 Remove
//             </span>
//         </>
//     );
// }