const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  postThought,
  putThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts get all thoughts and post thought
router.route('/').get(getThoughts).post(postThought);

// /api/thoughts/:thoughtId get, update, or delete single thought
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(putThought)
  .delete(deleteThought);

module.exports = router;
