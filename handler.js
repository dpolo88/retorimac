const Film = require('./controllers/Film')
const swapi = require('swapi-node');

function HTTPError (statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

module.exports.getAll = async () => {
  try {
    const films = await Film.getAll()
    return {
      statusCode: 200,
      body: JSON.stringify(films)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'no se pudo obtener los films'
    }
  }
}

module.exports.add = async (event) => {
  try {
    var myObject = JSON.parse(event.body);
    const valor = await Film.add(myObject)
    return {
      statusCode: 200,
      body: JSON.stringify(valor)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err
    }
  }
}

module.exports.api = async (event) => {
  try {
    const valor = await swapi.films({ id: event.pathParameters.id })
    if (!valor) throw new HTTPError(404, `id: ${event.pathParameters.id} was not found`)

    return {
      statusCode: 200,
      body: JSON.stringify(valor)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Could destroy fetch the Note.'
    }
  }
}