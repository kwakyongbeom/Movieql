const QL= require('graphql-yoga');
const resolvers =require('./graphql/resolver.js');


const server=new QL.GraphQLServer({
    typeDefs:"graphql/schema.graphql", //schema 설정
    resolvers:resolvers.resolvers //Resolver 설정 

});
server.start(()=>console.log("GraphQL is start"));


