let mongoose = require("mongoose");
let dbConfig = require('../db.config');
let sc = require('./schema');

module.exports = class Movie {
    coll = 'movies';
    modelMovie = null;

    constructor() {
        this.#init().catch(err => console.log(err));
        this.modelMovie = mongoose.model(this.coll, sc.movieSchema);
    }

    /**
     * Initialize connection (private method with #)
     * @returns {Promise<void>}
     */
    async #init() {
        let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
        console.log(`connect to ${conString}`);
        await mongoose.connect(`${conString}`, {useNewUrlParser:true, useUnifiedTopology:true});
    }

    /**
     * Return all titles (public method)
     */
    async getAllTitles(numOfDocs) {
        return await this.modelMovie.find({}, {_id: 0, title: 1})
                .limit(numOfDocs)
                .then(result => {return result})
                .catch(err => console.log(err));
    }

    async getTitlesByRegex(token, numOfDocs ,filter) {
        return await this.modelMovie.find({title: token}, filter)
                .limit(numOfDocs)
                .then(result => {return result})
                .catch(err => console.log(err));
    }
}
