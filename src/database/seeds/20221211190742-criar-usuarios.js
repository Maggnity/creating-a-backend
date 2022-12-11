'use strict';
const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('users', [
			{
				nome: 'John Doe',
				sobrenome: 'boston',
				idade: 19,
				email: 'johen@gmail.com',
				password_hash: await bcryptjs.hash('123456', 8),
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				nome: 'John Doe',
				sobrenome: 'boston',
				idade: 19,
				email: 'joDhen@gmail.com',
				password_hash: await bcryptjs.hash('123456', 8),
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				nome: 'John Doe',
				sobrenome: 'boston',
				idade: 19,
				email: 'joheEn@gmail.com',
				password_hash: await bcryptjs.hash('123456', 8),
				created_at: new Date(),
				updated_at: new Date(),
			},
		], {});

	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
