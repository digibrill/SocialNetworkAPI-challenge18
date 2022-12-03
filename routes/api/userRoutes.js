const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  postUser,
  deleteUser,
  addThought,
} = require('../../controllers/userController');

// /api/users get all users and post new user
router.route('/').get(getAllUsers).post(postUser);

// /api/users/:userId get or delete single user
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts 
//router.route('/:userId/thoughts').post(addThought);

module.exports = router;
