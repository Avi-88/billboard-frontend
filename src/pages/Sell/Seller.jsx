import React, { useState } from 'react';
import './Seller.css'; // Import the CSS file for Seller component
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import axios from 'axios';


const Seller = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0); // Set initial value to 0 for rating
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [pricePerDay, setPricePerDay] = useState(0); // Set initial value to 0 for pricePerDay
  const [errorMessage, setErrorMessage] = useState('');
  const userId = parseInt(localStorage.getItem("userId")); // Convert userId to number

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/post/newPost";
    const data = {
      "title": title,
      "description": description,
      "userId": userId,
      "rating": rating,
      "location": location,
      "category": category,
      "size": size,
      "price_per_day": pricePerDay
    };
    console.log(data);
    // axios.post(url, data)
    // .then((result) => {
    //   console.log(result);
    //   window.alert("post created ");
    // })
    // .catch(error => {
    //   window.alert(error.response.data.message);
    // });
  
  

    // For now, just log the form data
    // console.log({
    //   title,
    //   description,
    //   userId,
    //   rating,
    //   location,
    //   category,
    //   size,
    //   pricePerDay,
    // });
  };

  return (
    <div className='bg'>
      <Navbar />
      <div className="seller-container">
        <h2 className="seller-heading">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>User ID:</label>
            <input type="number" value={userId} readOnly className="form-control" />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input type="number" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} className="form-control" />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Size:</label>
            <input type="text" value={size} onChange={(e) => setSize(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label>Price Per Day:</label>
            <input type="number" value={pricePerDay} onChange={(e) => setPricePerDay(parseInt(e.target.value))} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Seller;


