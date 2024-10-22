const mongoose = require('mongoose');
//Import movies model
const Movies = require('./movies/model');
//Instantiate movies model as object
const movieObj = new Movies();

//Assign queries as promises
let query1 = movieObj
    .getAllTitles(10)
let query2 = movieObj
    .getTitlesByRegex(/Black/,10,
        {_id: 0, title: 1, genres:1, casts:1})

//run queries asynchronously
async function run(){
    try {
        let result = await Promise.all([query1, query2])
            .then(data => {return data});
        console.log(result.flat())
    } catch (error) {
        console.log(error); // rejectReason of any first rejected promise
    }
    await mongoose.connection.close();
}

//call run
run().catch(err => console.error(err));
