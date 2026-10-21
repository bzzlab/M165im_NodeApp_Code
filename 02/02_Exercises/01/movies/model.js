//Require mongoose, database config and schema
//??
//??
//??
let {getMoviesDistinctValues, getMoviesCount} = require('./externalQueries')


module.exports = class Movie {
    coll = 'movies';
    modelMovie = null;

    //set constructor
//??
//??
//??
//??
//??

    /**
     * Initialize connection (private method with #)
     * @returns {Promise<void>}
     */
    async #init() {
//??
        //try connecting with the database
//??
//??
//??
//??
//??
//??
//??
//??
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
//??
            //find movies without limit-method
//??
//??
//??
        //else
//??
            //find movies with limit-method
//??
//??
//??
//??
//??
    }

    getMoviesDistinctValues = getMoviesDistinctValues;
    getMoviesCount = getMoviesCount;
}
