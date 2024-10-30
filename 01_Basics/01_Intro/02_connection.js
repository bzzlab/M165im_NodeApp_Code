const mongoose = require('mongoose');
const dbConfig = require('./db.config');
async function main(){
    let result;
    try{
        let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
        console.log(conString);
        result = await mongoose.connect(conString);
    }catch (err) {
        result = err;
    }
    return result;
}

main()
    .then(data => {
        console.log(`Data: ${data}`)
        mongoose.connection.close();
    }).catch(err => {
    console.error(err);
})
