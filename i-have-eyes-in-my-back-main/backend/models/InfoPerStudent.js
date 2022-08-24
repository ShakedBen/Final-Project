const mongoose=require('mongoose');



const InfoPerStudentsSchema=new mongoose.Schema({
    className:String,
	name:String,
    profession:String,
    day:String,
    time:String,
	teacher:String,
	status:String,
    wday:String


})

module.exports = mongoose.model("infoperstudents",InfoPerStudentsSchema)