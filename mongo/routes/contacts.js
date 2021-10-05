const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc Get all users contacts
// @access private
router.get('/', (req, res)=>{
    res.send('Get all contacts');
});

// @route POST api/contacts
// @desc Add new contact
// @access private
router.post('/', (req, res)=>{
    res.send('add contact');
});

// @route PUT api/contacts/:id
// @desc Update contact
// @access private
router.put('/:id', (req, res)=>{
    res.send('update contact');
});

// @route DELETE api/contacts/:id
// @desc DELETE contact
// @access private
router.delete('/:id', (req, res)=>{
    res.send('delete contact');
});

module.exports = router;