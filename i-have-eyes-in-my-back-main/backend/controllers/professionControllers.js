const Profession = require('../models/Profession');
const ClassRoom = require('../models/ClassRoom');

let list = { textButton:'חזרה לעמוד הראשי',  pageName: 'HomePage'}

//add Profession
exports.addNewProfession = async (req, res) => {

    try{
        
        let userprofession = String(req.body.profession).toLowerCase()
        let profession = await Profession.findOne({ profession: userprofession})

        if(profession){
            return res.status(401).json({
                success: false,
                message: ' המקצוע ' + profession.profession + ' כבר רשום במערכת. ',
                list:list
            });
        }
        const newprofession = new Profession(
            { profession: userprofession },
        );

        let result = await newprofession.save()

        if(result){
            return res.status(201).json({
                success: true,
                message: ' המקצוע ' + result.profession + ' נרשם בהצלחה במערכת. ',
                list:list
            });
        }
        return res.status(401).json({
            success: false,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list:list
        });

       
    }catch(error){
        res.status(500).json({
            error: error,
            success: false,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list,
        });
    }
  
}



// app.post('/delete',(req,res)=>{
//     Users.findByIdAndRemove(req.body.id).then(data=>{
//         console.log(data)
//         res.send("deleted")
//     }).catch(err=>{
//         console.log(err)
//     })
// })



// get Professions
exports.getAllProfession = async (req, res) => {

    try{

        let oneProfession
        let ProfessionsArr = [];
    
        let allProfession = await Profession.find({})

        if (!allProfession) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }

        for (let i = 0; i < allProfession.length; i++) {
            oneProfession = {
                "_id": allProfession[i]._id,
                "profession": allProfession[i].profession,
            }

            ProfessionsArr.push(oneProfession)
        }

        ProfessionsArr.sort((a, b) => a.profession.localeCompare(b.profession))

        res.status(200).json({
            profession: ProfessionsArr
        });

    }catch(error){
        res.status(500).json({
            error: error,
            success: false,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            list: list,
        });
    }

}


exports.getAllProfessionOfClass = async (req, res) => {

      try{

        let theSelectionClass = req.body.theSelectionClass
        let ProfessionsArr = [];
        let oneProfession
    
        let theClass = await ClassRoom.findOne({ className: theSelectionClass })

        if (!theClass) {
            return res.status(401).json({
                success: false,
                message: "faild"
            });
        }

        
        for (let i = 0; i < theClass.profession.length; i++) {
            if(theClass.profession[i] !== ""){
                oneProfession = {
                    "_id": i,
                    "profession": theClass.profession[i],
                }
                ProfessionsArr.push(oneProfession)
            }
                
        }

        ProfessionsArr.sort((a, b) => a.profession.localeCompare(b.profession))
     
        res.status(200).json({
            profession: ProfessionsArr
        });

    }catch(error){
        res.status(500).json({
            error: error,
            success: false,
            message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
            
        });
    }

}

exports.deleteProfessions = async (req, res) => {

    try{

        let professionList = req.body.professionListToDeleate

        let allClass = await ClassRoom.find({})

        allClass.forEach( async (oneClass) => {

            await ClassRoom.updateOne( oneClass, {
                $pullAll: {
                    profession: professionList,
                },
            });
        })

        

        professionList.forEach( async (profession) =>  {

            let result =  await Profession.findOneAndRemove({ profession: profession })
 
            if(!result){
                 return res.status(401).json({
                 success: false,
                 message: "אופסי, ישנה תקלה.\n בבקשה נסה שנית מאוחר יותר.",
                 list: list 
                 })
             }
     
        })

        return res.status(201).json({
            success: true,
            professionList: professionList,
            message: " המקצוע/ות " + professionList + ' נמחק/ו בהצלחה מרשימת המקצועות.',
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

exports.deleteProfessionsFromClass = async (req, res) => {


    try{

        let professionList = req.body.professionListToDeleate

        let oneClass =  await ClassRoom.findOne({ className: req.body.selectClass }) 

        let result = await ClassRoom.updateOne( oneClass, {
                $pullAll: {
                    profession: professionList,
                },
            });
      
        if(result){
            return res.status(201).json({
                success: true,
                professionList: professionList,
                message:  " המקצוע " + professionList + ' נמחק בהצלחה מרשימת המקצועות של כיתה ' + oneClass.className,
                list: list
            })
        }

        return res.status(401).json({
            success: false,
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


