const mongoose=require('mongoose');

const ClassRoomSchema=new mongoose.Schema({
    className: {
        type: String,
        required: true,
        unique: true,
    },
    student:{
        type: [String],
    },
    profession: {
        type: [String],
    },
   
})

module.exports = mongoose.model("classRoom",ClassRoomSchema)