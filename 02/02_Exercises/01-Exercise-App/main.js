//Require mongoose and database model
//??
//Import movies model
//??
//Instantiate movies model as object
//??

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
//??
//??
//??


//run queries asynchronously with Promise.all
async function run(){
    //try
//??
//??
//??
//??
//??
        //rejectReason of any first rejected promise
//??
//??
    //close connection
//??
}

//call run
run().catch(err => console.error(err));
