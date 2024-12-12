const express = require("express");
const cors = require("cors");
const UserRoute = require("../connections/Routes/userRoutes");
const mongoose  = require("mongoose");
const app = express();
mongoose
.connect("mongodb://0.0.0.0:27017")
.then(()=>console.log("mongodb connected sucessfully"))
.catch((error)=>console.log(error))


app.use(express.json());
const corsOptions={
  origin:["http://localhost:5173","http://localhost:5174"],
  methods:["POST","GET"],
  allowedHeaders:["Content-Type","Authorization"]
}




app.use(cors(corsOptions));

app.use("/user",UserRoute);
  
app.listen(3000, ()=>{
  console.log("server is running");
});