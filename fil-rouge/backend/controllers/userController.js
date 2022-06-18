const User = require('../models/users')


exports.createUser = async (req, res) => {
  
    let data = req.body;
  
    const fullName = data.fullName
    const email = data.email
    const password = data.password
    const phone = data.phone
    const adress = data.adress
 
  
    User.create({
        fullName: fullName, email: email, phone: phone, adress: adress, password: password
    })
        .then((user) => {
  
            res.json(user)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
  };

exports.getAllUser = async(req, res) => {
    const users = await User.find()

    try{
      res.json(users)
    }catch(error){
      res.status(500).send(error)
    }
  }

exports.showOneUser = async(req, res) => {
    const user = await User.findById(req.params.userId)
    if(user) {
        res.send(user)
    }else{
        res.status(404).send({message: 'User Not Persist'})
    }
} 

exports.updateUser = async(req, res) =>{
    try {
        const {fullName, email, adress, phone} = req.body;
  
        await User.findOneAndUpdate({_id: req.params.userId}, {
            fullName, email, adress, phone
        })
  
        res.json({msg: "Updated a Product"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
  }

  exports.removeUser = async(req, res) =>{
    try {
        await User.findByIdAndDelete(req.params.userId)
        res.json({msg: "User Deleted"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.searchUser = async(req, res)=>{
    let data = await User.find(
      {
          "$or":[
              {fullName:{$regex:req.params.key.toLowerCase()}},
          ]
        }
  )
    
      res.send(data)
  }
  

