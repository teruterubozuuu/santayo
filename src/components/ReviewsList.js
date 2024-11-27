import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';

const ReviewsList = ({ carinderiaId }) => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                // Fetch reviews
                const reviewsRes = await fetch(`http://localhost:5001/api/feedback/${carinderiaId}`);
                const reviewsData = await reviewsRes.json();
                
                // Fetch average rating
                const ratingRes = await fetch(`http://localhost:5001/api/feedback/rating/${carinderiaId}`);
                const ratingData = await ratingRes.json();
                
                if (reviewsData.success) {
                    setReviews(reviewsData.data);
                }
                
                if (ratingData.success) {
                    setAverageRating(ratingData.data.averageRating);
                    setTotalReviews(ratingData.data.totalReviews);
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [carinderiaId]);

    return (
        <div className="reviews-container">
            <div className="reviews-summary">
                <h3>Customer Reviews</h3>
                <div className="average-rating">
                    <Rating value={averageRating} readOnly precision={0.5} />
                    <span>{averageRating.toFixed(1)} out of 5</span>
                    <span>({totalReviews} reviews)</span>
                </div>
            </div>
            
            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review._id} className="review-item">
                        <Rating value={review.rating} readOnly size="small" />
                        <p className="review-comment">{review.comment}</p>
                        <p className="review-date">
                            {new Date(review.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsList;
