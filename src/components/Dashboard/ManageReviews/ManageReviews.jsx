import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import DeleteReviews from './DeleteReviews';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-spire-94243.herokuapp.com/api/reviews/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SideBar />
            <div className="container text-center mt-5 col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h3>Manage Reviews</h3>
                <div>
                    <div>
                        {
                            reviews.map(review => <DeleteReviews review={review} key={review._id}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReviews;