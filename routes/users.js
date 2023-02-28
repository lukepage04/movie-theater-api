const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  // Code to retrieve all users from the database
});

// GET one user
router.get('/:id', (req, res) => {
  // Code to retrieve one user from the database based on their ID
});

// GET all shows watched by a user (user id in req.params)
router.get('/:id/shows', (req, res) => {
  // Code to retrieve all shows watched by a user from the database based on their ID
});

// PUT update and add a show if a user has watched it
router.put('/:id/shows', (req, res) => {
  // Code to update or add a show to a user's watched list in the database based on their ID and the show's ID in the request body
});

module.exports = router;
