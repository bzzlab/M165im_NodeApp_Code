//Require mongoose and database model
const mongoose = require('mongoose');//??
//Import movies model
const Movies = require('./movies/model');//??
//Instantiate movies model as object
const movieObj = new Movies();//??

//Assign queries as promises
let query1 = movieObj
    .getMoviesDistinctValues("rated");
let query2 = movieObj
    .getMovies({title: /Black/},10,
        {_id: 0, title: 1, genres:1, casts:1});
let query3 = movieObj
    .getMovies({},5,
        {_id: 0, title: 1, genres:1, casts:1});
let query4 = movieObj
    .getMoviesCount({year: 1960});
//query5: Query movies by title. Write as result only title and its supported language(s)
let query5 = movieObj//??
    .getMovies({title: /Black/},10,//??
    {_id: 0, title: 1, languages:1});//??


//run queries asynchronously with Promise.all
async function run(){
    //try
    try {//??
        let result = await Promise.all([query1, query2,query3, query4,query5])//??
            .then(data => {return data});//??
        console.log(result.flat());//??
    } catch (error) {//??
        //rejectReason of any first rejected promise
        console.log(error);//??
    }//??
    //close connection
    await mongoose.connection.close();//??
}

//call run
run().catch(err => console.error(err));
