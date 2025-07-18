const { 
    createUser, 
    getUsers, 
    getUsersbyIrid, 
    updateUser, 
    deleteUser,
    getUnprintedUsers,
    updateUserMarkAsPrinted
} = require('./user.controller');
const router = require('express').Router();

router.post('/createUser', createUser);
router.get('/GetAllUsers', getUsers);
router.get('/getUserbyIrid/:irid', getUsersbyIrid);
router.patch('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);
router.get('/getUnprintedUsers', getUnprintedUsers);
router.patch('/updateUserMarkAsPrinted', updateUserMarkAsPrinted);

module.exports = router;