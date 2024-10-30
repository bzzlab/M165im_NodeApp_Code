//Require mongoose, database config and schema
let mongoose = require("mongoose");//??
let dbConfig = require('../db.config');//??
let sc = require('./schema');//??

module.exports = class Movie {
    coll = 'movies';
    modelMovie = null;

    //set constructor
    constructor() {//??
        this.#init().catch(err => console.log(err));//??
        this.modelMovie = mongoose.model(this.coll,//??
            sc.movieSchema);//??
    }//??

    /**
     * Initialize connection (private method with #)
     * @returns {Promise<void>}
     */
    async #init() {
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

    /**
     * Get Movies by findFilter
     * @param {object} findFilter - find filter for query
     * @param {Number} numOfDocs - number of Documents (optional)
     * @param {object} outputFilter - which columns should be shown
     * @returns {Promise<awaited Promise<ResultType | void> | Promise<ResultType | void> | Promise<any>>}
     */
    async getMovies(findFilter, numOfDocs, outputFilter) {
        //if numOfDocs is null or lower than 0
        if (numOfDocs === null || numOfDocs <= 0){//??
            //find movies without limit-method
            return await this.modelMovie.find(findFilter, outputFilter)//??
                .then(result => {return result})//??
                .catch(err => console.error(err));//??
        //else
        } else {//??
            //find movies with limit-method
            return await this.modelMovie.find(findFilter, outputFilter)//??
                .limit(numOfDocs)//??
                .then(result => {return result})//??
                .catch(err => console.error(err));//??
        }//??
    }

    /**
     * Get distinct values by filter
     * @param {object} filter - distinct filter for query
     * @returns {Promise<awaited Promise<ResultType | void> | Promise<ResultType | void> | Promise<any>>}
     */
    async getMoviesDistinctValues(filter) {
        return await this.modelMovie.distinct(filter)//??
                .then(result => {return result})//??
                .catch(err => console.error(err));//??
    }


    /**
     * Get movies count by findFilter
     * @param findFilter
     * @returns {Promise<awaited Promise<ResultType | void> | Promise<ResultType | void> | Promise<any>>}
     */
    async getMoviesCount(findFilter) {
        //see example https://www.geeksforgeeks.org/mongoose-document-model-count-api/
        return await this.modelMovie.count(findFilter)//??
            .then(count => {//??
                    return `Movies in year ${findFilter.value}: ${count} movies`;//??
            })//??
            .catch(err => console.error(err));//??
    }
}
