// api/server.js

const express = require("express");
const { ApolloServer } = require("apollo-server");
const cors = require("cors");
const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const context = require("../graphql/context");
const app = express();

// app.use(cors());

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: "bounded",
});

module.exports = server;
