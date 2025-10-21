const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`,
        {useNewUrlParser:true, useUnifiedTopology:true});
}

//One schema used
let movieSchema = new mongoose.Schema({
    title : String
});
const Movies = mongoose.model('movies', movieSchema);

main().catch(err => console.log(err))

async function run(){
    let year = 1960;
    await Movies.find({year: year})
        .countDocuments()
        .then(count => {
            console.log(`Movies in year ${year}: ${count} movies`);
    }).catch(err => console.log(err));
    await mongoose.connection.close()
}

run();

