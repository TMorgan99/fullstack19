require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(morgan( (tokens, req, res) => {
    const body = JSON.stringify( req.body)
    if (body !== '{}') return('\t' + body)
  }
))

const cors = require('cors')
app.use(cors())

// log into the database...
const Phonebook = require('./models/phonebook')

app.use(express.static('build'))

// overwritten by static in build folder
// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

// post
app.post('/api/persons', (req, res, next) => {
  const body = req.body
  // validate presence of content
  // moved to error handler.
  // if (!body.name) {
  //   return res.status(400).json({ error: 'name missing' })
  // }
  // if (!body.number) {
  //   return res.status(400).json({ error: 'number missing' })
  // }

  //   // validate unique name      // TODO
  // post with existing name => put

// whitelisted fields
  const phonebook = new Phonebook({
    name: body.name,
    number: body.number,
  })
  phonebook
    .save()
    .then(savedPhonebook => savedPhonebook.toJSON())
    .then(formattedPhonebook => res.status(201).json(formattedPhonebook)) 
    .catch(error => next(error))
})

app.get('/api/persons', (req, res, next) => {
  Phonebook.find({})
    .then(records=> res.status(200).json(records))
    .catch(error => next(error))
})

// find single resource
app.get('/api/persons/:id', (req, res, next) => {
  Phonebook.findById(req.params.id)
  .then(person => {
    if (person) {
      res.json(person.toJSON())
    } else {
      res.status(204).end() 
    }  
  })
  .catch(error => next(error))
})

// ====================================================================
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const phonebook = {
    name: body.name,
    number: body.number,
  }

  Phonebook.findByIdAndUpdate(req.params.id, phonebook, { new: true })
    .then(updatedPhonebook => {
      res.json(updatedPhonebook.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Phonebook.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.get('/info', (req, res, next) => {
  Phonebook.find({})
    .then(records=> res.send( `
        <h1>Phonebook</h1>
        <p>Phonebook has records of ${records.length} people</p>
        <p>${Date()}</p>
        ` ))
    .catch(error => next(error))

})


const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Phonebook-backend running on port ${PORT}`)
})
// ====================================================================
