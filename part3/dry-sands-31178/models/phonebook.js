const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const uri = process.env.MONGODB_URI

// https://mongoosejs.com/docs/deprecations.html

const mongoose_options = {  
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}

mongoose.connect(uri, mongoose_options )
  .then(result => { 
    console.log(`connected to MongoDB at ${uri}`)
  })
  .catch((error) => {
    console.log(`error connecting to MongoDB at ${uri}:`, error.message)
  })

const phonebookSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 3,
    unique: true,
  },
  number: {
    required: true,
    type: String,
    minlength: 8,
  }
}).plugin(uniqueValidator)


phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Phonebook', phonebookSchema)  
