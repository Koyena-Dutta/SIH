const app = require('express')();
const http = require('http').Server(app);


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://koyena2004:<Gnw7r1XQv0OgFImi>@cg.x1axp.mongodb.net/?retryWrites=true&w=majority&appName=CG")

const User = require('./models/userModel.js')

async function insert()
{
    await User.create({
        name:'Sandeep',
        email:'Sandeep@gmail.com'
    });
}
insert();
http.listen(3000, function(){
    console.log('Server is running');
})