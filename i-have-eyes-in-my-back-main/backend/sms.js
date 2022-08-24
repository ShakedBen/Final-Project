// judi '+972543315931----+12184141637'
//0523190543
//0523194226
//mmyt1785@gmail.com
// ZSRX_9PTwu@=Zc^12345678

const LessonSchema = require('./models/Lesson');
const DailyAttendanceSchema = require('./models/DailyAttendance');
const studentsListSchema=require("./models/studentList");
const schedule = require('node-schedule');
const BreezeClassSchema=require('./models/breezeClass')

//add check Classname//



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





//---TIME TO START EVREY DAY ---// //
    let now = new Date(); 
	const sdate=new Date(now)
	sdate.setHours(17,0,0)//time to send message

	schedule.scheduleJob('00 00 17 * * 0-4', ()=>{
	console.log('start');
		g()
	console.log('end');
	});
//---TIME TO START EVREY DAY ---// //




// //---cal in week ---// //
//     let now = new Date(); 
// 	const sdate=new Date(now)
// 	sdate.setHours(17,0,0)//time to send message

// 	schedule.scheduleJob('00 00 00 * * 0-5', ()=>{
// 	console.log('start');
// 		cal()
// 	console.log('end');
// 	});
// //---cal in week ---// //




// let today="19/04/2022"
// g()
// const Ttime='23:40'




//התחברות מסד נתונים
require('dotenv').config()
 require('./db');
 let List_of_students_in_a_school=[]
 let List_of_students_not_in_a_school=[]

 class Class_of_students{
	 constructor(className,profession,name,phone,day)
	 {
		 this.profession=[];
		 this.className=className;
		 this.profession[this.profession.length]=profession;
		 this.name=name;
		 this.phone=phone;
		 this.day=day
	 }
	 setphone(phone){
		 this.phone=phone;
	 }
	 addProfession(profession)
	{
		this.profession[this.profession.length]=profession
	}
	addProfessionArray(profession)
	{
		this.profession=[];
		let size=profession.length;
		for(let i=0;i<size;i++)
		{
			this.profession[i]=profession[i];
		}
	}


 }
	inSchool= new Class_of_students()//done
	List_of_students_who_did_not_attend_class_but_is_in_school= new Class_of_students() //done
	List_of_students_who_did_not_attend_class_and_not_in_school= new Class_of_students() //done
	not_in_class= new Class_of_students()//done
	let sum_of_student_in_school=0
	let sum_of_students_who_did_not_attend_class_but_is_in_school=0
	let sum_of_students_who_did_not_attend_class_and_not_in_school=0


// רשימה שהמצלמה עדכנה dailyAttendance
async function g(){

	let Rresults=await DailyAttendanceSchema.find({'day':today})//מצלמה שמזהה את מי הגיע
	const PhoneRresults=await studentsListSchema.findOne({})//מספרי טלפון ושמות
	let  Lessonresults=await LessonSchema.find({'day':today})//המורה הכניסה מי הגיע לשיעור
    //add check if no one on school or in class //


	let index=0
	let Lsize=Lessonresults.length//size->גודל של כמה קולקשנים
	a=0

	for(let i=0;i<Lsize;i++)
	{
	let LsizeStudent=Lessonresults[i].students.length//LsizeStudent->גודל של כמה סטודנטים בכל קולקשן
	for(let j=0;j<LsizeStudent;j++)
	{
	if(Lessonresults[i].students[j].arrived==false)
		{
			//בדיקה אם קיים כבר פשוט להוסיף מקצוע
			for(let x=0;x<index;x++)
			{
				if(not_in_class[x].name.localeCompare(Lessonresults[i].students[j].name)==0)
				{
					not_in_class[x].addProfession(Lessonresults[i].profession)
					a++
				}


			}
			if(a==0){
			//אם לא נמצא נוסיף את המידע כחדש באינדקס חדש
			not_in_class[index]=new Class_of_students(Lessonresults[i].className,Lessonresults[i].profession,Lessonresults[i].students[j].name.replace(/\-/, ' '),"",Lessonresults[i].day)
			index++;
			a==0
			}
		}	
	}
	}


	for(let i=0;i<Rresults[0].students.length;i++)
	{
		if(Rresults[0].students[i].arrive==true)
		{
			List_of_students_in_a_school.push(Rresults[0].students[i].name)
			inSchool[sum_of_student_in_school]= new Class_of_students("","",Rresults[0].students[i].name,"","")
			sum_of_student_in_school++;
		}
		else if(Rresults[0].students[i].arrive==false)
		{
			List_of_students_not_in_a_school.push(Rresults[0].students[i].name)
			List_of_students_who_did_not_attend_class_and_not_in_school[sum_of_students_who_did_not_attend_class_and_not_in_school]= new Class_of_students("","",Rresults[0].students[i].name,"",today)
			sum_of_students_who_did_not_attend_class_and_not_in_school++;
		}
	}
	let nameP
	let nameL
	for(let j=0;j<PhoneRresults.students.length;j++)
	{
		nameP=PhoneRresults.students[j].name
		nameP.replace(/\-/, ' ')
		for(let i=0;i<sum_of_student_in_school;i++)
		{
			nameL=inSchool[i].name
			nameL.replace(/\-/, ' ')
			if(nameP.localeCompare(nameL)==0)
			{
				inSchool[i].setphone(PhoneRresults.students[j].phone)
				continue;
			}
			

		}
		for(let i=0;i<sum_of_students_who_did_not_attend_class_and_not_in_school;i++)
		{
			nameL=List_of_students_who_did_not_attend_class_and_not_in_school[i].name
			nameL.replace(/\-/, ' ')
			if(nameP.localeCompare(nameL)==0)
			{
				List_of_students_who_did_not_attend_class_and_not_in_school[i].setphone(PhoneRresults.students[j].phone.replace(/\-/, ''))
				continue;
			}
		}
	}

	//compare Not in class with in school
	const size_of_sudent_not_in_class=index;
	const size_of_student_in_school=sum_of_student_in_school;

	for(let i=0;i<size_of_sudent_not_in_class;i++)
	{
		for(let j=0;j<size_of_student_in_school;j++)
		{
			if(inSchool[j].name==not_in_class[i].name)
			{
				List_of_students_who_did_not_attend_class_but_is_in_school[sum_of_students_who_did_not_attend_class_but_is_in_school]=new Class_of_students (not_in_class[i].className,"",not_in_class[i].name.replace(/\-/, ' '),inSchool[j].phone.replace(/\-/, ''),not_in_class[i].day)//check profession (for)
				List_of_students_who_did_not_attend_class_but_is_in_school[sum_of_students_who_did_not_attend_class_but_is_in_school].addProfessionArray(not_in_class[i].profession)
				sum_of_students_who_did_not_attend_class_but_is_in_school++
				continue;
			}

		}
	}

	console.log("IN G()")
	SMS_SENDER_Breeze_from_class()
	SMS_SENDER_Breeze_from_School()
	ADD_TO_BREEZE()
	 //console.log(List_of_students_who_did_not_attend_class_but_is_in_school,"==============")
	 //console.log(not_in_class,"==============")
	 //console.log(inSchool,"==============")
	 //console.log(List_of_students_who_did_not_attend_class_and_not_in_school,"==============")
}














function SMS_SENDER_Breeze_from_class(){
console.log("in SMS_SENDER_Breeze_from_class()",sum_of_students_who_did_not_attend_class_but_is_in_school)
for(let i=0;i<sum_of_students_who_did_not_attend_class_but_is_in_school;i++)
{
let phone=List_of_students_who_did_not_attend_class_but_is_in_school[i].phone.replace(/0/, "972")
let name=List_of_students_who_did_not_attend_class_but_is_in_school[i].name
let profession=List_of_students_who_did_not_attend_class_but_is_in_school[i].profession
//let size_of_profession=profession.length
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "cfd0e127",
  apiSecret: "bQiCGuhjAcXl1tm3"
})


const from = "School"
const to = phone
let text=name+" הבריז מהשיעורים: "+profession+"\n";
const opts={
	"type":"unicode"
}
console.log(text)

vonage.message.sendSms(from, to, text,opts, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
}
}


function SMS_SENDER_Breeze_from_School(){
	console.log("in SMS_SENDER_Breeze_from_class()",sum_of_students_who_did_not_attend_class_and_not_in_school)
	for(let i=0;i<sum_of_students_who_did_not_attend_class_and_not_in_school;i++)
	{
	let phone=List_of_students_who_did_not_attend_class_and_not_in_school[i].phone.replace(/0/, "972")
	
	console.log(phone)
	let name=List_of_students_who_did_not_attend_class_but_is_in_school[i].name
	const Vonage = require('@vonage/server-sdk')

	const vonage = new Vonage({
	  apiKey: "cfd0e127",
	  apiSecret: "bQiCGuhjAcXl1tm3"
	})
	
	
	const from = "School"
	const to = phone
	let text=name+" נעדר מבית ספר "+"\n";
	const opts={
		"type":"unicode"
	}
	vonage.message.sendSms(from, to, text,opts, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			if(responseData.messages[0]['status'] === "0") {
				console.log("Message sent successfully.");
			} else {
				console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
			}
		}
	})
	}
	}
	

function ADD_TO_BREEZE()
{
	for(let i=0;i<sum_of_students_who_did_not_attend_class_but_is_in_school;i++)
	{
new BreezeClassSchema({

	className:List_of_students_who_did_not_attend_class_but_is_in_school[i].className,
	profession:List_of_students_who_did_not_attend_class_but_is_in_school[i].profession,
	date:List_of_students_who_did_not_attend_class_but_is_in_school[i].day,
	name:List_of_students_who_did_not_attend_class_but_is_in_school[i].name
}).save()
	}
}





















// ab()
// function ab(){

// 	const Vonage = require('@vonage/server-sdk')

// 	const vonage = new Vonage({
// 	  apiKey: "cfd0e127",
// 	  apiSecret: "bQiCGuhjAcXl1tm3"
// 	})

// let name="אבי"
// let prof=[" אנגלת "," תנך "]
// const from = "School"
// const to = "972543315931"
// const text =name+" הבריז מהשעורים: "+prof+"\n" 
// const opts={
// 	"type":"unicode"
// }

// vonage.message.sendSms(from, to, text,opts, (err, responseData) => {
//     if (err) {
//         console.log(err);
//     } else {
//         if(responseData.messages[0]['status'] === "0") {
//             console.log("Message sent successfully.");
//         } else {
//             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//         }
//     }
// })

// }













