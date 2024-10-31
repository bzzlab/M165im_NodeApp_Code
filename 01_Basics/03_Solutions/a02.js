/*
Task: Implement and test connection
Program a connection to airbnb by using config.js.
No hardcoded values for connection are allowed.
 */
const mongoose = require('mongoose');
let dbConfig = require('./config');//??
//implement connection to mongodb
async function main() {
    let result = null;
    try {
        let conString = `${dbConfig.HOST}/${dbConfig.DB}`;//??
        console.log(`connect to ${conString}`);//??
        result = await mongoose.connect(conString);//??
    } catch (err){
        result = err;
    }
    return result;
}

//call connection
main()//??
    .then((data) => {//??
        console.log(`Data: ${data}`)
        mongoose.connection.close();//??
    })//??
    .catch(err => console.log(err));//??
