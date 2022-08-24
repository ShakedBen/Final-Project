const mongoose=require('mongoose');



// const subjectSchema=new mongoose.Schema({
// 	subject:String

// 	})




const BreezeClassSchema=new mongoose.Schema({
	profession:Array,
	className:String,
	name:String,
	date:String
})

module.exports = mongoose.model("breezeclass",BreezeClassSchema)