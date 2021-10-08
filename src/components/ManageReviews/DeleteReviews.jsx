import React from 'react';

const DeleteReviews = ({ service }) => {
    const { name, _id } = service;

    const deleteReview = id => {
        console.log(id)
        fetch(`https://peaceful-spire-94243.herokuapp.com/deletereview/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('review deleted')
            })
    }

    const updateReview = id =>{

    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h4>{name}</h4>
                </div>
                <div className="col-md-3">
                    <button onClick={() => deleteReview(_id)}>Delete</button>
                    <button className="button-fix" onClick={() => updateReview()}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteReviews;