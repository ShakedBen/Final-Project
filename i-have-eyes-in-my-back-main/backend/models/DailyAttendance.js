const mongoose=require('mongoose');


// const timetSchema=mongoose.Schema(
//     {
// 		String
// 	}
// )

const studentSchema=mongoose.Schema(
    {
    name:String,
    arrive:Boolean,
	time:[String]
}

)

const DailyAttendanceSchema=new mongoose.Schema({
    day:String,
    students:[studentSchema]

})



module.exports = mongoose.model("dailyattendances",DailyAttendanceSchema)