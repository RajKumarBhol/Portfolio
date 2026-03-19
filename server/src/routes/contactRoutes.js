const express = require('express');
const { submitContact, getMessages } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const { check } = require('express-validator');

const router = express.Router();

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('message', 'Message is required').not().isEmpty()
    ],
    submitContact
);

router.get('/', protect, getMessages);

module.exports = router;
