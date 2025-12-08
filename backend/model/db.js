const mongoose = require("mongoose");

const MongooseDBConnectionFunction = (app)=>{

mongoose.connect(process.env.DB_Uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 3000
})
.then(()=>{console.log(process.env.DB_Uri,"- connected")})
.catch((error)=>{console.error("Connection error:", error); console.log(process.env.DB_Uri," not connected");app.locals.dbError = error});

mongoose.set('debug', true);

const isDbConnected = (req,res,next)=>{
    // console.log(req.app.locals.dbError,"req.app.locals.dbError")
    if (req.app.locals.dbError) {
    return res.status(500).json({message:req.app.locals.dbError.message});
  }
next(); 
}


}
module.exports = {MongooseDBConnectionFunction, isDbConnected}