require('dotenv').config()

console.log(`heroku config:set MONGODB_URI=${process.env.MONGODB_URI}`)
