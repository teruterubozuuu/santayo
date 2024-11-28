import { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import './ReviewsList.css';

const ReviewsList = ({ carinderiaId }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/feedback/${carinderiaId}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setReviews(data);
            } catch (err) {
                console.error('Error fetching reviews:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (carinderiaId) {
            fetchReviews();
        }
    }, [carinderiaId]);

    if (loading) return <div>Loading reviews...</div>;
    if (error) return <div>Error loading reviews: {error}</div>;

    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            {reviews && reviews.length > 0 ? (
                <div className="reviews-list">
                    {reviews.map((review) => (
                        <div key={review._id} className="review-item">
                            <Rating value={Number(review.rating)} readOnly />
                            <p>{review.comment}</p>
                            <small>{new Date(review.createdAt).toLocaleDateString()}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    );
};

export default ReviewsList;
