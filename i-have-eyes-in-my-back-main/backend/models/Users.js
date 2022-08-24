const mongoose=require('mongoose');

const UsersSchema=new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    admin: Boolean,
    password: String
   
})

module.exports = mongoose.model("users",UsersSchema)
