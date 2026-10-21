const mongoose = require('mongoose');
//import connection configurations
//??
async function main(){
    let result;
    try{
        //use connection configurations
//??
//??
//??
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
