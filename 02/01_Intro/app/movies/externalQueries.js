async function getTitlesByRegex(token, numOfDocs ,filter) {
    return await this.modelMovie.find({title: token}, filter) //??
            .limit(numOfDocs) //??
            .then(result => {return result}) //can be omitted! //??
            .catch(err => console.log(err)); //??
}

module.exports = {getTitlesByRegex}