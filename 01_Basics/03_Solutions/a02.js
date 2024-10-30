/*
Task: Implement and test connection
Program a connection to airbnb by using config.js.
No hardcoded values for connection are allowed.
 */
const mongoose = require('mongoose');
let dbConfig = require('./config');//??
//implement connection to mongodb
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;//??
    console.log(`connect to ${conString}`);//??
    await mongoose.connect(`${conString}`);//??
}

//call connection
main()//??
    .then(() => {//??
        mongoose.connection.close();//??
    })//??
    .catch(err => console.log(err));//??
