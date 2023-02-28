const express = require('express');
const router = express.Router();

// GET all shows
router.get('/', (req, res) => {
  // Code to retrieve all shows from the database
});

// GET one show
router.get('/:id', (req, res) => {
  // Code to retrieve one show from the database based on its ID
});

// GET shows of a particular genre (genre in req.params)
router.get('/genre/:genre', (req, res) => {
  // Code to retrieve all shows from the database that match a particular genre
});

// PUT update rating of a show that has been watched
router.put('/:id/rating', (req, res) => {
    const rating = req.body.rating.trim();
    
    if (!rating || rating.length === 0) {
      return res.status(400).json({ message: 'Invalid rating' });
    }
  
    // Code to update the rating of a show that has been watched in the database based on its ID and the new rating in the request body
  });
  

// PUT update the status of a show
router.put('/:id/status', (req, res) => {
    const status = req.body.status.trim();
    
    if (!status || status.length < 5 || status.length > 25) {
      return res.status(400).json({ message: 'Invalid status' });
    }
  
    // Code to update the status of a show in the database based on its ID and the new status in the request body
  });
  

// DELETE a show
router.delete('/:id', (req, res) => {
  // Code to delete a show from the database based on its ID
});

module.exports = router;
