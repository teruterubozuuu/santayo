import React, { useState } from "react";
import "./Review.css";
import { Rating } from "@mui/material";

function Review({ setIsOpen }) {
  const [reviewData, setReviewData] = useState({
    rating: 5,
    comment: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      console.log('Submitting review:', reviewData);
      
      const response = await fetch('http://localhost:5001/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: reviewData.rating,
          comment: reviewData.comment
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const data = await response.json();
      console.log('Response:', data);

      setSuccess("Review submitted successfully!");
      setReviewData({
        rating: 5,
        comment: ""
      });

      setTimeout(() => {
        setIsOpen(false);
      }, 2000);

    } catch (err) {
      console.error('Error:', err);
      setError("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="review-container">
      <div className="review-wrapper">
        <p onClick={() => setIsOpen(false)} className="closeBtn">x</p>
        <h1>Submit a Review</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="rating-container">
            <Rating
              name="rating"
              value={reviewData.rating}
              onChange={(_, newValue) => {
                setReviewData(prev => ({...prev, rating: newValue}));
              }}
            />
          </div>

          <div className="reviewTxt-container">
            <textarea
              name="comment"
              placeholder="Share your thoughts..."
              value={reviewData.comment}
              onChange={(e) => setReviewData(prev => ({...prev, comment: e.target.value}))}
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