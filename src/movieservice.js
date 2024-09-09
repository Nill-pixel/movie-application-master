const axios = require('axios')

const sendLog = async (level, message, details) => {
  const log = {
    level: level,
    message: message,
    details: details
  }

  try {
    await axios.post('http://localhost:8000/logs', log)
    console.log('Log send successfuly')
  } catch (err) {
    console.error('Falha ao enviar log', err)
  }
}
const getMovies = (done) => {
  // This url can be used - axios.get("http://localhost:3000/movies")
  axios.get("http://localhost:3000/movies").then(response => {
    const movies = response.data

    sendLog('INFO', 'Get movies successfuly', { count: movies.length })

    return done(undefined, movies)
  }).catch(error => {
    sendLog('ERROR', 'Error get movies', { error: error.message })
    done("Encountered error while getting movies details ", error)
  })
}

//This method will get specific movie id from json server
const getMovieById = (movieId, done) => {
  // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)
  axios.get(`http://localhost:3000/movies/${movieId}`).then(response => {
    const movie = response.data
    sendLog('INFO', `movie with ID ${movieId} find with success`, { movieId })
    return done(undefined, movie)
  }).catch(error => {
    sendLog('ERROR', `Error to return movie with ${movieId}`, { error: error.message })
    done("Encountered error while getting movies details ", error)
  })
}
//This method will save Movie details in Json server
const saveMovieDetails = (movieDetails, done) => {
  //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)
  axios.post(`http://localhost:3000/movies`, movieDetails).then(response => {
    const movie = response.data
    return done(undefined, movie)
  }).catch(error => {
    done("Encountered error while save movies details ", error)
  })
}

//This method will update MovieDetails in Json Server
const updateMovieDetails = (movieId, movieDetails, done) => {
  //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)
  axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails).then(response => {
    const movie = response.data

    sendLog('INFO', 'movie saved successfuly', { movie });

    return done(undefined, movie)
  }).catch(error => {
    sendLog('ERROR', 'Error saving movie', { error: error.message });

    done("Encountered error while update movies details ", error)
  })
}

//This method will delete specific movie from Json Server
const deleteMovieById = (movieId, done) => {
  //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)
  axios.delete(`http://localhost:3000/movies/${movieId}`).then(response => {
    const movie = response.data
    sendLog('INFO', `movie with ID ${movieId} deleted with success`, { movieId })
    return done(undefined, movie)
  }).catch(error => {
    sendLog('ERROR', 'Error deleting movie', { error: error.message });
    done("Encountered error while delete movies details ", error)
  })
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
}
