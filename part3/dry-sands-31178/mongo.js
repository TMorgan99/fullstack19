
let posting = true  // or listing
// node mongo.js yourpassword [ name number ]
if ( process.argv.length<3 ) {
  console.log('must give password as argument')
  console.log('USAGE: node mongo.js yourpassword [ name number ]')
  process.exit(1)
}
if ( process.argv.length<5 ) {
  console.log( 'Finding all')
  posting = false
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
  

const db = 'phonebook-app'
// const url = 'mongodb://localhost/person'  // local instance
const url =
  `mongodb+srv://fullstack19:${password}@cluster0-im6gb.azure.mongodb.net/${db}?retryWrites=true&w=majority`


const mongoose = require('mongoose')
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const phonebookRec = mongoose.model('person', phonebookSchema);

if (posting) {
  const record = new phonebookRec({ 
    name: name,
    number: number
  })

  record.save()
    .then(_=>console.log(
      `added ${record.name} number ${record.number} to phonebook`
    ))
    .catch(err=> console.log(err))
    .finally(_=> mongoose.connection.close())

} else {

  phonebookRec.find({})
    .then(phonebookRecs => {
      console.log('Phonebook:')
      phonebookRecs.forEach(record => 
        console.log(record.name, ' ==> ', record.number)
      )
      console.log(phonebookRecs.length, ' records in all')
    })
    .catch(err=> console.log(err))
    .finally(_=> mongoose.connection.close() )
      
}
