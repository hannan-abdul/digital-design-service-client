import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./Manageservice.css"
import { serviceAction } from '../../../redux/action/customServiceAction';
import { Link } from 'react-router-dom';
import ModalForm from './ModalForm';
import swal from 'sweetalert';
import axios from 'axios';

const DeleteService = ({ service }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const email = useSelector((state) => state.auth.userdetails.email);
    // modal function 
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const { name, price, _id } = service;

    const deleteService = async () => {
        try{
            await axios.delete(`https://peaceful-spire-94243.herokuapp.com/api/services/${_id}`,{
                data: {email: email}
            });
            swal("Successfully Deleted", "Your service has been successfully Deleted!", "success");
            window.location.replace("/manage-services");
        }
        catch(err){
            swal("Failed!", "You can delete only your added Service!", "error", { dangerMode: true });
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
                    <h5>${price}</h5>
                </div>
                <div className="col-md-3">
                    <button className="button-fix" onClick={() => deleteService(_id)}>Delete</button>
                    <button className="button-fix" onClick={openModal} className="button-fix">Edit</button>
                </div>
                <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} service={service} />
            </div>
        </div>
    );
};

export default DeleteService;
