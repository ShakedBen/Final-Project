const mongoose=require('mongoose');

const TeacherSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

module.exports = mongoose.model("teacher",TeacherSchema)
