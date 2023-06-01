const taskModels = require('../models/taskModels');
const TaskModel =  require('../models/taskModels');

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks);
};

module.exports.saveTask = async (req, res) => {
    const {task} = req.body;
    taskModels.create({task})
    .then((data) => {
        console.log("saved successfully...")
        res.status(201).send(data)
    })
    .catch(err => {
        console.log(err);
        res.send({error:err, msg:'Something went wrong...'})
    })
};

module.exports.updateTask = async (req, res) => {
const {id} = req.params;
const {task} = req.body;

TaskModel.findByIdAndUpdate(id, {task})
.then(() => res.send('Updated successfully'))
.catch((err) => {
    console.log(err)
    res.send({error:'err', msg:'something went wrong!'})
});
};

module.exports.deleteTask = (req, res) => {
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("deleted successfully"))
    .catch((err) => {
        console.log(err)
    })
}