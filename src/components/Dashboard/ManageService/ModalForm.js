import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import "./Manageservice.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const ModalForm = ({ modalIsOpen, closeModal, service }) => {
    const email = useSelector((state) => state.auth.userdetails.email);
    const { name, price, description, _id } = service;
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [photo, setPhoto] = useState(null);

    const onSubmit = async data => {
        const serviceUpdateData = {
            name: data.name,
            email: email,
            price: data.price,
            description: data.description,
            photo: photo
        };

        try {
            const res = await axios({
                method: 'put',
                url: `https://peaceful-spire-94243.herokuapp.com/api/services/${_id}`,
                data: serviceUpdateData
            });
            console.log('server side response', res)
            swal("Successfully updated", "Your service has been successfully updated!", "success");
            history.push("/manage-services")
        }
        catch (err) {
            swal("Failed!", "You can update only your added Service!", "error", { dangerMode: true });
            console.log(err);
        }
    };

    // photo upload 
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '85444d10cf609e017623ead34516426d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setPhoto(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-primary text-center">{name}</h2>
                <form className="justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input class="form-control" defaultValue={name} placeholder="Name" {...register("name")} />
                    <br />
                    <input class="form-control" defaultValue={price} placeholder="Price" {...register("price")} />
                    <br />
                    <textarea class="form-control" defaultValue={description} placeholder="Description" {...register("description")} />
                    <br />
                    <input class="form-control" name="Add Photo" type="file" onChange={handleImageUpload} />
                    <br />
                    <button className="button-fix" type="submit">Update</button>
                </form>
            </Modal>
        </div>
    );
};

export default ModalForm;