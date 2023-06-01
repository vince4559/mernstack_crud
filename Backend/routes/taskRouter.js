const {Router} = require('express');
const { getTasks, saveTask, updateTask, deleteTask } = require('../controllers/taskControllers');


const router = Router();

router.get('/get', getTasks);

router.post('/post', saveTask);

router.put('/update/:id', updateTask);

router.delete('/delete/:id', deleteTask)

module.exports = router