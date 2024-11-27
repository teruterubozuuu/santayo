const express = require('express');
const router = express.Router();
const Feedback = require('../model/Feedback');

router.post('/feedback', async (req, res) => {
    try {
        console.log('Received feedback request:', req.body);
        
        const { rating, comment } = req.body;
        
        if (!rating || !comment) {
            return res.status(400).json({
                success: false,
                message: 'Rating and comment are required'
            });
        }

        const newFeedback = new Feedback({
            rating,
            comment,
            createdAt: new Date()
        });

        const savedFeedback = await newFeedback.save();
        console.log('Saved feedback:', savedFeedback);

        res.status(201).json({
            success: true,
            data: savedFeedback
        });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({
            success: false,
            message: 'Error saving feedback'
        });
    }
});

module.exports = router; 