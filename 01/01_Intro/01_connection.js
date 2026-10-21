const mongoose = require("mongoose");
//write asynchronous connection-function
async function main(){
    let result; //??
    try { //??
        result = await mongoose //??
            .connect('mongodb://127.0.0.1:27017/mflix'); //??
    } catch (error) { //??
        result = error; //??
    } //??
    return result; //??
}
//establish connection to the database
main().then(result => { //??
    console.log(result); //??
    console.log(`closing connection ...`); //??
    mongoose.connection.close(); //??
}).catch(err => { //??
    console.error(err); //??
}) //??
