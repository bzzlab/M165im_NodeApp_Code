/*
Task: Implement schema and some sample queries
Program a connection to airbnb by using config.js.
No hardcoded values for connection are allowed.
 */
const mongoose = require('mongoose');
let dbConfig = require('./config-training');

//??
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;//??
    console.log(`connect to ${conString}`);//??
    await mongoose.connect(`${conString}`,//??
        {useNewUrlParser: true, useUnifiedTopology: true});//??
}

//Implement schema companie with one string
let companySchema = new mongoose.Schema({//??
    name: String//??
});
const Companies = mongoose.model('companies', companySchema);//??
//call connection
main().catch(err => console.log(err))//??

async function run() {
    //find all companies by name.
    await Companies.find({})//??
        .then(result => console.log(result))//??
        .catch(err => console.log(err));//??
    //find all companies by name. Output only name and limit result by 10 documents
    await Companies.find({},{_id:0,name:1})//??
        .limit(10)//??
        .then(result => console.log(result))//??
        .catch(err => console.log(err));//??
   /* await Reviews.distinct("address.country")//??
        .then(result => console.log(result))//??
        .catch(err => console.log(err));//??*/
    /*await Movies.find()
        .limit(10)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    await Movies.find({title: /Black/},{_id:0, genres:1, casts:1})
        .limit(10)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
    await Movies.distinct("rated")
        .then(result => {
            console.log(result)
            // mongoose.connection.close()
        })
        .catch(err => console.log(err));*/
    //close connection
    await mongoose.connection.close();
}

run();

