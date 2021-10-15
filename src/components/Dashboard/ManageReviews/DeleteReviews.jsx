import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import UpdateModal from './UpdateModal';

const DeleteReviews = ({ review }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const email = useSelector((state) => state.auth.userdetails.email);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const { name, _id } = review;

    //delete review
    const deleteReview = async () => {
        try{
            await axios.delete(`http://localhost:5050/api/reviews/${_id}`,{
                data: {email: email}
            });
            swal("Successfully Deleted", "Your review has been successfully Deleted!", "success");
            window.location.replace("/manage-reviews");
        }
        catch(err){
            swal("Failed!", "You can delete only your added Reviews!", "error", { dangerMode: true });
            console.log(err);
        }
    }

    return (
        <div>
            <div className="row row-fix justify-content-center align-items-center">
                <div className="col-md-3">
                    <h4>{name}</h4>
                </div>
                <div className="col-md-3">
                    <button className="button-fix" onClick={() => deleteReview(_id)}>Delete</button>
                    <button className="button-fix" onClick={openModal} className="button-fix">Edit</button>
                </div>
                <UpdateModal modalIsOpen={modalIsOpen} closeModal={closeModal} review={review} />
            </div>
        </div>
    );
};

export default DeleteReviews;