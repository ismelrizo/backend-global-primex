const { gql } = require("apollo-server");
const personType = require("./person");

const rootType = gql`
	type Query {
		root: String
	}
	type Mutation {
		root: String
	}
`;

module.exports = [rootType, personType];
