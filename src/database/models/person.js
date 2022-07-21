module.exports = (sequelize, Sequelize) => {
	const Person = sequelize.define("Person", {
		id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: Sequelize.STRING },
		lastName: { type: Sequelize.STRING },
		mothersLastName: { type: Sequelize.STRING },
		address: { type: Sequelize.STRING },
		phone: { type: Sequelize.STRING },
	});
	return Person;
};
