const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
// const cookieSession = require("cookie-session");


require('dotenv').config()

// conect database
require('./db');

// All models of schemas in the database
const Users = require('./models/Users');
const Teacher = require('./models/Teacher');
const Admin = require('./models/Admin');
const ClassRoom = require('./models/ClassRoom');
const Profession = require('./models/Profession');

const userController = require('./controllers/userController')
const classController = require('./controllers/classControllers')
const professionControllers = require('./controllers/professionControllers')
const studentControllers = require('./controllers/studentControllers')

const auth = require('./controllers/auth')

app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("welcome to I Have eyes in my back")
})

app.post('/EmailCheck', userController.emailCheck)

app.post('/signup', userController.CreateAuser)

app.post('/login', userController.Login)

app.post('/password-reset-request', userController.verifyEmailUser)
app.post('/reset-password', userController.resetPassword)

app.get("/getUser", auth.isAuth, userController.getUser)




app.get("/getClasses", auth.isAuth, classController.getAllClass)
app.post("/AddClassRoom", auth.isAuth, classController.addNewClass) 
app.post("/deleteClassRoom", auth.isAuth,classController.deleteClass )
app.post("/addProfessionsToClasses", auth.isAuth, classController.addProfessionsToClasses)

app.get("/getProfessions", auth.isAuth, professionControllers.getAllProfession)
app.post("/AddProfession", auth.isAuth, professionControllers.addNewProfession)
app.post("/getProfessionsOfClass", professionControllers.getAllProfessionOfClass)
app.post("/deleteProfession", auth.isAuth, professionControllers.deleteProfessions)

app.post("/deleteProfessionFromClass", auth.isAuth, professionControllers.deleteProfessionsFromClass)

app.get("/getAllTeacher", auth.isAuth, userController.getAllTeacher)
app.post("/addUserEmail", auth.isAuth, userController.addNewUserEmail)
app.post("/deleteTeacher",auth.isAuth, userController.deleteTeacher)

app.get("/getAllStudent", auth.isAuth, studentControllers.getAllStudent)
app.post("/addStudentsToClass", auth.isAuth, studentControllers.addStudentsToClass)

app.post("/getStudentOfClass", auth.isAuth, studentControllers.getAllStudentsOfClass)
app.post("/deleteStudentsFromClass", auth.isAuth, studentControllers.deleteStudentsFromClass)

app.post("/createNewLesson", auth.isAuth, studentControllers.LessonObject)

app.post("/updateUser", auth.isAuth, userController.UpdateUserDetails)


var server_host = process.env.HOST || "0.0.0.0";

app.listen( process.env.PORT || 3000 ||  8080, server_host,()=>{
    console.log("server runnicng")
}) 
