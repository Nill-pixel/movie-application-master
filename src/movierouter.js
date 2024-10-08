const express = require('express')
const router = express.Router()
const movieController = require('./moviecontroller');
const axios = require('axios')

//import all the modules required 
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
/**
 * API to get the details of all movies
 * EFFECTIVE URL: GET /api/v1/movies
 */
router.get("/", (req, res) => {
  try {
    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    try {
      movieController.getMovies((err, results) => {
        if (err) {
          sendLog('ERROR', 'Error get movies', { error: err });
          return res.status(400).send(err)
        }
        sendLog('INFO', 'Get movies successfuly', { results })
        return res.status(200).send({ STATUS: "OK", data: results })

      })
    } catch (err) {
      sendLog('WARNING', 'Controller error', { error: err });
      return res.status(500).send("Unexpected error occurred in controller.");
    }
  } catch (err) {
    sendLog('WARNING', 'Unexpected error', { error: err });
    return res.status(500).send("Unexpected error. Try after some time")
  }
});
/**
 * API to get the details of specific movie
 * EFFECTIVE URL: GET /api/v1/movie/:movieId
 */
//
router.get("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;

    try {
      movieController.getMovieById(movieId, (err, results) => {
        if (err) {
          sendLog('ERROR', 'Error get movies by id', { error: err });
          return res.status(400).send(err);
        }
        sendLog('INFO', `movie with ID ${movieId} find with success`, { results })
        return res.status(200).send({ STATUS: "OK", data: results });
      });
    } catch (err) {
      sendLog('WARNING', 'Controller error', { error: err });
      return res.status(500).send("Unexpected error occurred in controller.");
    }
  } catch (err) {
    sendLog('WARNING', 'Unexpected error', { error: err });
    return res.status(500).send("Unexpected error. Try after some time");
  }
});


/**
 * API to save new movie
 * EFFECTIVE URL: POST /api/v1/movies
 */
router.post("/", (req, res) => {
  try {
    //retreive movieDetails from req.body
    const movieDetails = req.body
    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    try {
      movieController.saveMovieDetails(movieDetails, (err, results) => {
        if (err) {
          sendLog('ERROR', `Error while saving movie`, { error: err.message })
          res.status(400).send(err)
        }
        sendLog('INFO', `movie saved with success`, { movieDetails })
        return res.status(200).send({ STATUS: "OK", data: results })
      });
    } catch (err) {
      sendLog('WARNING', 'Controller error', { error: err });
      return res.status(500).send("Unexpected error occurred in controller.");
    }
  } catch (err) {
    sendLog('WARNING', 'Error while saving movie', { error: err.message })
    return res.status(500).send("Unexpected error. Try after some time")
  }
});

/**
 * API to edit movie detail
 * EFFECTIVE URL: PATCH /api/v1/movies/:movieId
 */
router.patch("/:movieId", (req, res) => {
  try {
    //retreive moviedId from req.params
    const movieId = req.params.movieId
    //retreive movieDetails from req.body
    const movieDetails = req.body
    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    try {
      movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {
        if (err) {
          sendLog('ERROR', 'Error saving movie', { error: err.message });
          return res.status(400).send(err)
        }
        sendLog('INFO', 'movie updated successfuly', { results });
        return res.status(200).send({ STATUS: "OK", data: results })
      });
    } catch (err) {
      sendLog('WARNING', 'Controller error', { error: err });
      return res.status(500).send("Unexpected error occurred in controller.");
    }
  } catch (err) {
    sendLog('WARNING', 'Error saving movie', { error: err.message });
    return res.status(500).send("Unexpected error. Try after some time")
  }
});

/**
 * API to delete movie
 * EFFECTIVE URL: DELETE /api/v1/movies/:movieId
 */
router.delete("/:movieId", (req, res) => {
  try {
    //retreive moviedId from req.params
    const movieId = req.params.movieId
    //calling controller method and passing the parameters 
    //return the response as per error or result coming from controller
    try {
      movieController.deleteMovieById(movieId, (err, results) => {
        if (err) {
          sendLog('ERROR', 'Error deleting movie', { error: err.message });
          return res.status(400).send(err)
        }
        sendLog('INFO', `movie with ID ${movieId} deleted with success`, { results })
        return res.status(200).send({ STATUS: "OK", data: results })
      })
    } catch (err) {
      sendLog('WARNING', 'Controller error', { error: err });
      return res.status(500).send("Unexpected error occurred in controller.");
    }
  } catch (err) {
    sendLog('WARNING', 'Error deleting movie', { error: err.message });
    return res.status(500).send("Unexpected error. Try after some time")
  }
});

module.exports = router;
