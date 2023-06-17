const express = require("express");
const UserOperations = require("../controllers/User.js");

const router = express.Router();

router.get('/', UserOperations.GetUsers)

router.post('/', UserOperations.CreateUser)

router.get('/:id', UserOperations.GetUser)

router.delete('/:id', UserOperations.DeleteUser)

router.patch('/:id', UserOperations.UpdateUser)

module.exports = router;