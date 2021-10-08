import React from 'react';
import "./Manageservice.css"

const DeleteService = (props) => {
    const { name, price, _id } = props.service;

    const deleteProduct = id => {
        console.log(id)
        fetch(`https://limitless-inlet-87809.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('product deleted')
            })
    }

    const updateProduct = id => {

    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h4>{name}</h4>
                </div>
                <div className="col-md-3">
                    <h5>${price}</h5>
                </div>
                <div className="col-md-3">
                    <button onClick={() => deleteProduct(_id)}>Delete</button>
                    <button className="button-fix" onClick={() => updateProduct(_id)}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteService;