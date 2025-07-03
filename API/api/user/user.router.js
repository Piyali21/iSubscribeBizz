const { 
    createUser, 
    getUsers, 
    getUsersbyIrid, 
    updateUser, 
    deleteUser 
} = require('./user.controller');
const router = require('express').Router();

router.post('/createUser', createUser);
router.get('/GetAllUsers', getUsers);
router.get('/getUserbyIrid/:irid', getUsersbyIrid);
router.patch('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

module.exports = router;