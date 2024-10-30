/*
Task: Implement schema and some sample queries
Program a connection to airbnb by using config.js.
No hardcoded values for connection are allowed.
 */
const mongoose = require('mongoose');
let dbConfig = require('./config');

async function main(){
    let result;//??
    //try connecting with the database
    try{//??
        let conString = `${dbConfig.HOST}/${dbConfig.DB}`;//??
        console.log(conString);//??
        result = await mongoose.connect(conString,//??
            {useNewUrlParser: true, useUnifiedTopology: true});//??
    }catch (err) {//??
        result = err;//??
    }//??
    return result;//??
}


//Implement schema companies with one string
let companySchema = new mongoose.Schema({//??
    name: String//??
});//??
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
    await mongoose.connection.close();//??
}

run();

