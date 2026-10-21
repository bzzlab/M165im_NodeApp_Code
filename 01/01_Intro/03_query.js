const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`);
}

//create movie schema
let movieSchema = new mongoose.Schema({ //??
    title : String //??
}); //??
//create movie model based on schema
const Movies = mongoose.model('movies', movieSchema); //??

//call connection
main().catch(err => console.log(err))

//create function run with queries
async function run(){
    //select first 10 movies, where title contains string "Black".
    await Movies.find() //??
        .limit(10) //??
        .then(result => console.log(result)) //??
        .catch(err => console.log(err)); //??

    //select first 10 movies, where title contains string "Black".
    //show as result columns title, genres, casts
    await Movies //??
        .find({title: /Black/},{_id:0,title:1, genres:1, casts:1}) //??
        .limit(10) //??
        .then(result => { //??
            console.log(result) //??
        }) //??
        .catch(err => console.log(err)); //??

    //close connection
    await mongoose.connection.close()
    }
//execute run function
run().catch(err => console.log(err)); //??

