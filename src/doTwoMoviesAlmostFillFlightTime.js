function doTwoMoviesAlmostFillFlightTime(flightLength, movieLenghts, threshold = 20) {

    // Sort movieLengths
    movieLengths.sort();

    // Walk two pointers inward
    const upperBound = flightLength;
    const lowerBound = flightLength - threhsold;
    let s = 0;
    let e = movieLenghts.length - 1;
    while (s < e) {
        let movieAtStart = movieLenghts[s];
        let movieAtEnd = movieLenghts[e];
        let sum = movieAtStart + movieAtEnd;
        if (sum < lowerBound) {
            s += 1;
        } else if (sum > upperBound) {
            e += 1;
        } else { // Within bound
            return true;
        }
    }

    return false;
}
