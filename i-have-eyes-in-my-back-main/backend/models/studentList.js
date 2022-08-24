const mongoose=require('mongoose');


// const timetSchema=mongoose.Schema(
//     {
// 		String
// 	}
// )

const studentSchema=mongoose.Schema(
    {
    name:String,
	phone:String
}

)

const studentsListSchema=new mongoose.Schema({
    students:[studentSchema]

})



module.exports = mongoose.model("studentslists",studentsListSchema)