import React from 'react';

export default function ShipperDetailRating() {
    const confirmRating = () => {
        var checkbox = document.getElementsByName("rating");
        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked === true) {
                document.getElementById("result-confirm-rating").innerHTML = "Your rating: " + checkbox[i].value;
                document.getElementById("btn-confirm-rating").style.color = "#1cb33c";
            }
        }
    }

    return (
        <>
            <tr>
                <th rowSpan={2}>
                    <h3>RATING:</h3>
                    <p className="community-rating">Community's rating: ?</p>
                </th>
                <td className="text-right txt-right-rating">
                    <div id="rating">
                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                        <label className="full" htmlFor="star5" title="5 stars" />
                        <input type="radio" id="star4" name="rating" defaultValue={4} />
                        <label className="full" htmlFor="star4" title="4 stars" />
                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                        <label className="full" htmlFor="star3" title="3 stars" />
                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                        <label className="full" htmlFor="star2" title="2 stars" />
                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                        <label className="full" htmlFor="star1" title="1 star" />
                    </div>
                </td>
                <td className="text-right col-confirm-rating">
                    <span onClick={confirmRating} id="btn-confirm-rating" className="fas fa-check-circle" />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <p id="result-confirm-rating">Please rate the shipper!</p>
                    <textarea rows={3} cols={28} placeholder="Your message..." defaultValue={""} /><br />
                    <button>SEND</button>
                </td>
            </tr>
        </>
    );
}