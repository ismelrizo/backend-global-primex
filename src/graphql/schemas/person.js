const { gql } = require("apollo-server");

module.exports = gql`
	type Person {
		id: Int!
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}

	extend type Query {
		getAllPerson: [Person!]
		getSinglePerson(personId: Int!): Person
	}

	extend type Mutation {
		create(input: CreateInput!): CreateResponse
		update(input: UpdateInput!): UpdateResponse
		delete(input: DeleteInput!): DeleteResponse
	}

	type CreateResponse {
		id: Int!
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}

	input CreateInput {
		name: String!
		lastName: String!
		mothersLastName: String!
		address: String!
		phone: String!
	}

	type UpdateResponse {
		id: Int
		name: String
		lastName: String
		mothersLastName: String
		address: String
		phone: String
	}

	input UpdateInput {
		id: Int
		name: String
		lastName: String
		mothersLastName: String
		address: String
		phone: String
	}

	type DeleteResponse {
		id: Int
		name: String
		lastName: String
		mothersLastName: String
		address: String
		phone: String
	}

	input DeleteInput {
		id: Int
	}

	
`;
