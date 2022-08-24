const ClassRoom = require('../models/ClassRoom');
const Profession = require('../models/Profession');

let list = { textButton:'חזרה לעמוד הראשי',  pageName: 'HomePage'}


//AddNewClass
exports.addNewClass = async (req, res) => {

    try{
    
        newClassRoom = String(req.body.newClassRoom + req.body.newClassNumber)
        let isClass = await ClassRoom.findOne({ className: newClassRoom })

        if(isClass){
            return res.status(401).json({
                message: "שגיאה!\n הכיתה כבר רשומה במערכת.",
                list: list,
            });
        }

        
        const addnewClassRoom = new ClassRoom(
            { className: newClassRoom, },
            { versionKey: false }
        );

        let result = await addnewClassRoom.save()


        if(result){
            return res.status(201).json({
                success: true,
                Newclass: addnewClassRoom,
                // token: token,
                message: 'הכיתה נוספה בהצלחה!',
                list: list,
            })
        }
        else{

            return res.status(401).json({
                success: false,
                // token: token,
                message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
                list: list,
            
            })

        }
        
    
    }catch{ err => {
        console.log(err)
        res.status(500).json({
            error: err,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list,
            
        });}
    }
    
}


// get all classes
exports.getAllClass = async (req, res, next) => {

    try{
        
        let classessArr = [];
        let oneClass
        let allclasses = await ClassRoom.find({})

        if (!allclasses) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }

        for (let i = 0; i < allclasses.length; i++) {
            oneClass = {
                "_id": allclasses[i]._id,
                "className": allclasses[i].className,
            }

            classessArr.push(oneClass)
        }

        classessArr.sort((a, b) => a.className.localeCompare(b.className))

        res.status(200).json({
            classRoom: classessArr
        });
        next()
       
    }catch{
        res.status(401).json({
            message: "Auth failed"
        });
        next()
    }

}


exports.deleteClass = async (req, res) => {

    try{

        let listOfClass = req.body.classListToDeleate

        

        listOfClass.forEach( async (oneClass) =>  {

           let result =  await ClassRoom.findOneAndRemove({ className: oneClass })

           if(!result){
                return res.status(401).json({
                success: false,
                message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
                textButton:'חזרה לעמוד הראשי',
                pageName: 'HomePage' 
                })
            }
    
        })

      
        return res.status(201).json({
            success: true,
            Newclass: listOfClass,
            message: " הכיתה " + listOfClass + ' נמחקה בהצלחה מרשימת הכיתות.',
            textButton:'חזרה לעמוד הראשי',
            pageName: 'HomePage' 
        })
      
  
     

    }catch(err){
        res.status(500).json({
            error: err,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            textButton:'חזרה לעמוד הראשי',
            pageName: 'HomePage'
            
        });
    }


}

exports.addProfessionsToClasses = async (req, res) => {

    try{

        let classList = req.body.classList
        let professionList = req.body.professionList
        let oneClass


        await classList.forEach( async (item) => {
             
            oneClass =  await ClassRoom.findOne({ className: item})

            await ClassRoom.updateOne(oneClass, {
                $addToSet: {
                    profession: professionList
                }
            })
            
        })

        let message = professionList + ' נוספו בהצלחה ל ' + classList;

        if(professionList.length == 1){
            message = professionList + ' נוסף בהצלחה ל ' + classList;
        }
       
        return res.status(201).json({
            success: true,
            professionList: professionList,
            classList: classList,
            message: message,
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


