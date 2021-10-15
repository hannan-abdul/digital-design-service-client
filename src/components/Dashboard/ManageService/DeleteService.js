import React from 'react';
import "./Manageservice.css"

const DeleteService = (props) => {
    const { name, price, _id } = props.service;

    const deleteProduct = id => {
        console.log(id)
        fetch(`https://peaceful-spire-94243.herokuapp.com/delete/${id}`, {
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

// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// DB_USER=digitalService
// DB_PASS=1234zxcv
// DB_NAME=homeRenovation

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4ko6w.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const serviceCollection = client.db("homeRenovation").collection("renovationService");
//   const reviewsCollection = client.db("homeRenovation").collection("reviews");
  
//   //read reviews
//   app.get('/reviews', (req, res) => {
//     reviewsCollection.find({})
//       .toArray((err, items) => {
//         res.send(items)
//       })
//   })
// //post reviews
//   app.post('/addReview', (req, res) => {
//     const newReview = req.body;
//     console.log('adding new product', newReview)
//     reviewsCollection.insertOne(newReview)
//       .then(result => {
//         console.log('inserted count', result.insertedCount)
//         res.send(result.insertedCount > 0)
//       })
//   })

//   // delete reviews
//   app.delete('/deletereview/:id', (req, res) => {
//     console.log(req.params.id);
//     reviewsCollection.deleteOne({_id: ObjectID(req.params.id) })
//       .then(result => {
//         res.send(result.deletedCount > 0);
//       })
//   })

//   // read services 
//   app.get('/services', (req, res) => {
//     serviceCollection.find({})
//       .toArray((err, items) => {
//         res.send(items)
//       })
//   })
// // post services
//   app.post('/addService', (req, res) => {
//     const newService = req.body;
//     console.log('adding new product', newService)
//     serviceCollection.insertOne(newService)
//       .then(result => {
//         console.log('inserted count', result.insertedCount)
//         res.send(result.insertedCount > 0)
//       })
//   })
  
// // delete service
//   app.delete('/delete/:id', (req, res) => {
//     console.log(req.params.id);
//     serviceCollection.deleteOne({_id: ObjectID(req.params.id) })
//       .then(result => {
//         res.send(result.deletedCount > 0);
//       })
//   })

//   //update service
//   app.put('/update/:id', (req, res) => {
//     const updatedItem = {
//         name: req.body.name,
//         city: req.body.city,
//         description: req.body.description,
//         imageURL: req.body.imageURL,
//     };
//     console.log(req.body);
//     serviceCollection.updateOne({ _id: ObjectId(req.params.id) },
//         { $set: updatedItem })
//         .then(result => {
//             res.send(result.modifiedCount > 0)
//         })
//   })

//   console.log('database connected')
// });