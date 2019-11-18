const {GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');
const axios = require('axios');

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt},
    mission_name: { type: GraphQLString},
    launch_year: { type: GraphQLString},
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean},
    rocket: { type: RocketType}
   })
})

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocekt_id: { type: GraphQLString},
    rocket_name: { type: GraphQLString},
    rocket_type: { type: GraphQLString},
  })
})

const RootQuery = new GraphQLObjectType({
  //graphQL list
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {//where we actually get data
        return axios.get('https://api.spacexdata.com/v3/launches')
          .then(res => res.data)
      }
    }
  }
})

//endpoints that have resolvers (functions) that handle data
module.exports = new GraphQLSchema({
  query: RootQuery
})