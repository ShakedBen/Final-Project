	
	require('dotenv').config()
	require('./db');

	const LessonSchema = require('./models/Lesson');// שם המורמה, כיתה,מקצוע, זמן, הבריז או לא
	const DailyAttendanceSchema = require('./models/DailyAttendance');//מצלמה אם הגיע או לא
	const InfoPerStudentsSchema=require("./models/InfoPerStudent");
	const schedule = require('node-schedule');
	


	//---TIME TO START EVREY DAY ---// //
    let now = new Date(); 
	//{Sunday:1,Monday:2,........,Saturday:7}
	let wichDay=now.getDay()+1;
if(wichDay===1)
{
	wichDay="Sunday"
}
if(wichDay===2)
{
	wichDay="Monday"

}	
if(wichDay===3)
{
	wichDay="Tuesday"
}
if(wichDay===4)
{
	wichDay="Wednesday"
}
if(wichDay===5)
{
	wichDay="Thursday"
}
	//const sdate=new Date(now)
	//sdate.setHours(17,0,0)//time to send message

	schedule.scheduleJob('00 10 17 * * 0-4', ()=>{
	console.log('start');
	start_at_end_of_day()
	console.log('end');
	});
//---TIME TO START EVREY DAY ---// //

//---DATE FORMAT + DATE=TODAY ---//
const Ttoday = new Date();
const yyyy = Ttoday.getFullYear();
let mm = Ttoday.getMonth() + 1; // Months start at 0!
let dd = Ttoday.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const today = dd + '/' + mm + '/' + yyyy;
//console.log(today);
//---DATE FORMAT ---//




	// //{Sunday:1,Monday:2,Tuesday:3,Wednesday:4,Thursday:5........,Saturday:7}
	// let today="28/04/2022"
	// let wichDay="Thursday"
	// console.log(wichDay)
	// start_at_end_of_day()



	class Info_per_student{
		constructor(className,profession,name,day,time,teacher,status,wday)
		{
			this.profession=profession;
			this.className=className;
			this.name=name;
			this.day=day
			this.time=time
			this.teacher=teacher
			this.status=status
			this.wday=wday
		}
	 }
	 allStudentsInfo=new Info_per_student();
	 allStudentsInfo2=new Info_per_student();
	
async function start_at_end_of_day(){

	const ResLesson=await LessonSchema.find({'day':today})
	const ResDaily=await DailyAttendanceSchema.find({'day':today})
	const sizeOfLesson=ResLesson.length

	//כל מי שלא הגיע לבית ספר וכן הגיע
	const sizeOfDaily=ResDaily.length
	let sizeOfNew=0
	let sizeOfNew2=0
	for(let i=0;i<sizeOfDaily;i++)
	{
		const sizeOfStudentDaily=ResDaily[i].students.length
		for(let j=0;j<sizeOfStudentDaily;j++)
		{
			if(ResDaily[i].students[j].arrive===true)
			{
				let nameL=ResDaily[i].students[j].name.replace(/\-/, ' ')
				nameL=nameL.replace(/\-/, ' ')
				//(className,profession,name,day,time,teacher,status)
				allStudentsInfo[sizeOfNew]=new Info_per_student("","",nameL,ResDaily[i].day,ResDaily[i].students[j].time,"","in",wichDay)
				sizeOfNew++;
			}
			else if(ResDaily[i].students[j].arrive===false)
			{
				let nameL=ResDaily[i].students[j].name.replace(/\-/, ' ')
				nameL=nameL.replace(/\-/, ' ')
				allStudentsInfo[sizeOfNew]=new Info_per_student("","",nameL,ResDaily[i].day,"","","notin",wichDay)
				sizeOfNew++;
			}
		}

	}




	for(let i=0;i<sizeOfLesson;i++)
	{
		const sizeOfStudentLessons=ResLesson[i].students.length
		for(let j=0;j<sizeOfStudentLessons;j++)
		{
			
			if(ResLesson[i].students[j].arrived===true)
			{
				  let nameL=ResLesson[i].students[j].name.replace(/\-/, ' ')
				  nameL=nameL.replace(/\-/, ' ')
				allStudentsInfo2[sizeOfNew2]=new Info_per_student(ResLesson[i].className,ResLesson[i].profession,nameL,ResLesson[i].day,ResLesson[i].time,ResLesson[i].teacherName,"present",wichDay);
				sizeOfNew2++;
			}
			else if(ResLesson[i].students[j].arrived===false)
			{
				let nameL=ResLesson[i].students[j].name.replace(/\-/, ' ')
				nameL=nameL.replace(/\-/, ' ')
				allStudentsInfo2[sizeOfNew2]=new Info_per_student(ResLesson[i].className,ResLesson[i].profession,nameL,ResLesson[i].day,ResLesson[i].time,ResLesson[i].teacherName,"Not present",wichDay);
				sizeOfNew2++;
			}

		}
	}
	//console.log("-----",allStudentsInfo2,"-------")
	//console.log(allStudentsInfo)

	//נוהח בבית ספר
	//allStudentsInfo

	//נוכי בשיעור
	//allStudentsInfo2


	//בדיקה אם לא בכיתה ובבית ספר הבריז
	//אם לא בכיתה לא בבית ספר בבית

	for(let i=0;i<sizeOfNew;i++)
	{
		for(let j=0;j<sizeOfNew2;j++)
		{
			//console.log("i: ",allStudentsInfo[i].name,"j: ",allStudentsInfo2[j].name)
			if(allStudentsInfo[i].name==allStudentsInfo2[j].name)
			{
				//console.log("in")
				//console.log("one i:",i,allStudentsInfo[i].name,"two j:",j,allStudentsInfo2[j].name)
				if(allStudentsInfo[i].status==="in"&&allStudentsInfo2[j].status==="Not present")
				{
					//console.log("in if 1")
					allStudentsInfo2[j].status="evasion"
				}
				if(allStudentsInfo[i].status==="notin"&&allStudentsInfo2[j].status==="Not present")
				{
					
					//console.log("in if 2")
					allStudentsInfo2[j].status="home"
				}

			}
		}
	}

	//console.log(allStudentsInfo2)
	for(let i=0;i<sizeOfNew2;i++)
	{
		new InfoPerStudentsSchema({
			className:allStudentsInfo2[i].className,
			name:allStudentsInfo2[i].name,
			profession:allStudentsInfo2[i].profession,
			day:allStudentsInfo2[i].day,
			time:allStudentsInfo2[i].time,
			teacher:allStudentsInfo2[i].teacher,
			status:allStudentsInfo2[i].status,
			wday:allStudentsInfo2[i].wday
		}).save()
	}

	 }


   