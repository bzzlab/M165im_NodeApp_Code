let mongoose = require("mongoose");
let movieSchema = new mongoose.Schema({
    title : String
});

module.exports = {
    movieSchema
}
