import express from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name')
      .not()
      .isEmpty()
      .withMessage('Name is required'),
    check('email')
      .isEmail()
      .withMessage('Please include a valid email'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Please enter a password with six or more characters')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }


    res.send('User route');
  }
);

module.exports = router;
