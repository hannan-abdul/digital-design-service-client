import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';
import swal from 'sweetalert';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState(false);
    const email = useSelector((state) => state.auth.userdetails.email);

    //review add
    const onSubmit = async data => {
        const reviewData = {
            name: data.name,
            email: email,
            city: data.city,
            description: data.description,
            photo: photo
        };

        try {
            const res = await axios({
                method: 'post',
                url: `https://peaceful-spire-94243.herokuapp.com/api/reviews/addreview`,
                data: reviewData
            });
            console.log('server side response', res)
            swal("Successfully Added", "Your review has been successfully added!", "success");
            res && history.push("/manage-reviews")
        }
        catch (err) {
            setError(true);
            console.log(err);
        }
    };
    //photo upload
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '85444d10cf609e017623ead34516426d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setPhoto(response.data.data.display_url);
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
                <form style={{ width: "50%" }} onSubmit={handleSubmit(onSubmit)}>
                    <input class="form-control" placeholder="Name" {...register("name")} />
                    <br />
                    <input class="form-control" placeholder="city" {...register("city")} />
                    <br />
                    <input class="form-control" placeholder="Description" {...register("description")} />
                    <br />
                    <input class="form-control" name="Add Photo" type="file" onChange={handleImageUpload} />
                    <br />
                    <input type="submit" />
                    {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                </form>
            </div>
        </section>
    );
};

export default AddReview;