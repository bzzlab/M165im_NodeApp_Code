const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`);
}

//create movie schema
let movieSchema = new mongoose.Schema({
    title : String
});
//create movie model based on schema
const Movies = mongoose.model('movies', movieSchema);

//call connection
main().catch(err => console.log(err))

//create function run with queries
async function run(){

    //show all possible ratings
//??
//??
//??
//??
//??

    let year = 1960;
    //count all movies released in 1960
//??
//??
//??
//??
//??
    //close connection
    await mongoose.connection.close()
}

//execute run function
run().catch(err => console.log(err));

