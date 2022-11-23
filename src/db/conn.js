const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/goldgym',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connection is Successful")
}).catch((error)=>{
    console.log(error);
})