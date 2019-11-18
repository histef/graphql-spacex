const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const app = express(); //intialize express

//only one endpoint
app.use('/graphql',
graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 4000; //listen on heroku port OR Port 5000
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))