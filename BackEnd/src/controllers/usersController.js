const usersController = {};
const User = require('../models/User');


usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json ({users})
};

usersController.createUser = async (req, res) => {
    const {userName} = req.body;
    console.log(userName)
    const newUser = new User({userName});
    await newUser.save();
    res.json ({message: 'users por POST'})
};

usersController.updateUser = async(req, res) => {
    const {userName} = req.body;
   await User.findByIdAndUpdate(req.params.id,{ 
       userName
    });
    res.json ({message: '1 User actualizado por PUT'})
};

usersController.deleteUser = async(req, res) =>{ 
    await User.findByIdAndDelete(req.params.id)

    res.json ({message: '1 User borrado por DELETE'});
}
usersController.getUser = async(req, res) =>{
   const user =  await User.findById(req.params.id);
    res.json ({user})

};

module.exports = usersController;