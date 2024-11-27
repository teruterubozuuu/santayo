const express = require('express');
const router = express.Router();
const Feedback = require('../model/Feedback');

// Get reviews route
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log('Looking for reviews with carinderiaId:', id);

        // Find reviews where carinderiaId is either the number or "card/number"
        const reviews = await Feedback.find({
            $or: [
                { carinderiaId: id },
                { carinderiaId: `card/${id}` }
            ]
        }).sort({ createdAt: -1 });

        console.log('Found reviews:', reviews);
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching reviews',
            error: error.message 
        });
    }
});

// Post review route
router.post('/', async (req, res) => {
    try {
        console.log('Received review data:', req.body);
        const newFeedback = new Feedback(req.body);
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).json({ 
            message: 'Error saving review',
            error: error.message 
        });
    }
});

module.exports = router; 