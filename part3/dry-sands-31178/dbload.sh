#!/bin/bash


node mongo.js
# populate the people collection
node mongo.js $DBPW     "Arto Hellas"       "040-123456"
node mongo.js $DBPW     "Ada Lovelace"      "39-44-5323523"
node mongo.js $DBPW     "Dan Abramov"       "12-43-234345"
node mongo.js $DBPW     "Mary Poppendieck"  "39-23-6423122"

# now, list all people
node mongo.js $DBPW
