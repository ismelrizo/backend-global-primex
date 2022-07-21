// graphql/resolvers/user.js

const { Person } = require("../../database/models");

module.exports = {
	Mutation: {
		async create(root, args, context) {
			const { name, lastName, mothersLastName, address, phone } = args.input;
			return Person.create({ name, lastName, mothersLastName, address, phone });
		},
		async update(root, args, context) {
			const { id, name, lastName, mothersLastName, address, phone } = args.input;
			return Person.update(
				{ name, lastName, mothersLastName, address, phone },
				{ where: { id } }
			);
		},
		async delete(root, args, context) {
			const { id } = args.input;
			return Person.destroy({ where: { id } });
		}

	},
	Query: {
		async getAllPerson(root, args, context) {
			return Person.findAll();
		},
		async getSinglePerson(_, { personId }, context) {
			return Person.findByPk(personId);
		},
		 
	},
};
