#!/bin/sh

DB=phonebook-app
MONGO_PW=s5Ynl9jA4LGjQsgl

export MONGODB_URI=mongodb://localhost/$DB
export MONGODB_URI=mongodb+srv://fullstack19:$MONGO_PW@cluster0-im6gb.azure.mongodb.net/$DB?retryWrites=true&w=majority


