const studentsListSchema=require("../models/studentList");
let list = { textButton:'חזרה לעמוד הראשי',  pageName: 'HomePage'}
const ClassRoom = require('../models/ClassRoom');
const Lesson = require('../models/Lesson');
const Users = require('../models/Users');

exports.getAllStudent = async (req, res) => {

    const Rresults=await studentsListSchema.findOne({})

    let studentList = []
    for(let i = 0; i < Rresults.students.length; ++i){
        studentList.push({
            '_id': i,
            'name': Rresults.students[i].name
        })
        
    }

    studentList.sort((a, b) => a.name.localeCompare(b.name))
    
    return res.status(201).json({
        success: true,
        studentList: studentList,
        message: "",
    })
}

exports.addStudentsToClass = async (req, res) => {

    try{

        let studentsList = req.body.studentsList
        let classList = req.body.classList
    
        classList.forEach( async (item) => {
    
            let oneClass =  await ClassRoom.findOne({ className: item})

            await ClassRoom.updateOne(oneClass, {
                $addToSet: {
                    student: studentsList
                }
            })
    
        })
    
        return res.status(201).json({
            success: true,
            studentsList: studentsList,
            classList: classList,
            message: studentsList + ' נוספ/ו בהצלחה ל ' + classList,
            list: list
        })
    
    
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list
            
        });
    }
   
}

exports.getAllStudentsOfClass = async (req, res) => {

    try{

      let theSelectionClass = req.body.theSelectionClass
  
      let theClass = await ClassRoom.findOne({ className: theSelectionClass })

      if (!theClass) {
          return res.status(401).json({
              success: false,
              message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
              list: list
          });
      }


      let studentList = []

      for(let i = 0; i < theClass.student.length; ++i){
        studentList.push({
            '_id': i,
            'name': theClass.student[i]
        })
        }
        studentList.sort((a, b) => a.name.localeCompare(b.name))
   
      res.status(200).json({
        students: studentList
      });

  }catch(error){
      res.status(500).json({
          error: error,
          success: false,
          message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
          list: list
          
      });
  }

}

exports.deleteStudentsFromClass = async (req, res) => {

    try{

        let studentsList = req.body.studentListToDeleate

        let oneClass =  await ClassRoom.findOne({ className: req.body.selectClass})

        let result = await ClassRoom.updateOne(oneClass, {
            $pullAll: {
                student: studentsList
            }
        })
    
        if(result){

            return res.status(201).json({
                success: true,
                studentsList: studentsList,
                oneClass: oneClass.className,
                message: studentsList + ' נמחק/ו בהצלחה מכיתה ' + oneClass.className,
                list: list
            })
        }
    
        return res.status(201).json({
            success: false,
            studentsList: studentsList,
            oneClass: oneClass.className,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list
        })
    
    
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list
            
        });
    }
   
}


exports.LessonObject = async (req, res) => {

    try{

        let oneClass = req.body.theSelectionClass
        let oneProfession = req.body.profession
        let studentsList = req.body.studentList
        let studentArrived = req.body.studentArrived
        let user = await Users.findById(req.body.getId)

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        let HH =  today.getHours();
        let MM =  today.getMinutes();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        if (HH < 10) HH = '0' + HH;
        if (MM < 10) MM = '0' + MM;

        const todayFormat = dd + '/' + mm + '/' + yyyy;
        const timeFormat = HH + ':' + MM;
        
        let students = []

        studentsList.forEach( student => {
            if(studentArrived.includes(student.name)){
                students.push({
                    'name':  student.name,
                    'arrived': true
                })
            }
            else{
                students.push({
                    'name':  student.name,
                    'arrived': false
                })
            }

        })

        const newLesson = new Lesson({
            teacherName: user.firstName + " " + user.lastName,
            className: oneClass,
            profession: oneProfession,
            day: todayFormat, 
            time: timeFormat, 
            students: students,
        });

        let result = await newLesson.save()
        if(result){

            return res.status(201).json({
                success: true,
                studentsList: studentsList,
                oneClass: oneClass.className,
                message: 'סימון התלמידים נקלט בהצלחה!',
                textButton:'חזרה לעמוד הראשי',
                pageName: 'HomePage'
            })
        }
    
        return res.status(201).json({
            success: false,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            textButton:'חזרה לעמוד הראשי',
            pageName: 'HomePage'
        })
    
    
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: err,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            textButton:'חזרה לעמוד הראשי',
            pageName: 'HomePage'
            
        });
    }
   
}




