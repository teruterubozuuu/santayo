import React, { useState } from "react";
import "./Review.css";
import { Rating } from "@mui/material";

function Review({ setIsOpen, carinderiaId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input before sending
    if (!rating || !comment) {
      setError('Please provide both rating and comment');
      return;
    }

    const reviewData = {
      carinderiaId: window.location.pathname.split('/')[2], // Get ID from URL
      rating: Number(rating),
      comment: comment.trim()
    };

    console.log('Submitting review data:', reviewData); // Debug log

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit review');
      }

      // Clear form on success
      setRating(0);
      setComment('');
      alert('Review submitted successfully!');

    } catch (err) {
      console.error('Error submitting review:', err);
      setError(err.message || 'Failed to submit review');
    }
  };

  return (
    <div className="review-container">
      <div className="review-wrapper">
        <p onClick={() => setIsOpen(false)} className="closeBtn">x</p>
        <h1>Submit a Review</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="rating-container">
            <Rating
              name="rating"
              value={rating}
              onChange={(_, newValue) => {
                setRating(newValue);
              }}
            />
          </div>

          <div className="reviewTxt-container">
            <textarea
              name="comment"
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Review;