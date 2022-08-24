
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on("connected",()=>{
    console.log("connected to mongo!");
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err);
})
