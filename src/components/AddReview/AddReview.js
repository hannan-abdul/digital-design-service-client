import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../Dashboard/SideBar/SideBar';

const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            city: data.city,
            description: data.description,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addReview`;
        console.log(reviewData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('server side response', res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '85444d10cf609e017623ead34516426d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section>
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: "-5%", top: "10%", backgroundColor: "#F4FDFB" }}>
                <h2>Add New Review</h2>
                <form style={{width:"50%"}} onSubmit={handleSubmit(onSubmit)}>
                    <input class="form-control" name="name" placeholder="Name" ref={register} />
                    <br />
                    <input class="form-control" name="city" placeholder="city" ref={register} />
                    <br />
                    <input class="form-control" name="description" placeholder="Description" ref={register} />
                    <br />
                    <input class="form-control" name="Add Photo" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddReview;