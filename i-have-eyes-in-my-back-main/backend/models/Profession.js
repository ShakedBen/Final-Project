const mongoose=require('mongoose');

const ProfessionSchema = new mongoose.Schema({
    profession: {
        type: String,
        required: true,
        unique: true,
    },
})

module.exports = mongoose.model("profession",ProfessionSchema)