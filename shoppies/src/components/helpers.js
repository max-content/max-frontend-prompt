export function isAlreadyThere(newMovie, movies) {
    var isNominated = false;
    for(var i = 0; i < movies.length; i++) {
        if(newMovie.imdbID === movies[i].imdbID) {
            isNominated = true;
        }
    }
    return isNominated;
}