//Require mongoose
let mongoose = require("mongoose");//??
//Setup movie schema
let movieSchema = new mongoose.Schema({
    //title as string
    title : String,//??
    //plot as string
    plot : String,//??
    //languages as empty array
    languages: [],//??
    //year as number
    year: Number//??
})

//export movie schema
module.exports = {
    movieSchema
}
