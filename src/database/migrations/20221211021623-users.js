/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:*/
      await queryInterface.createTable('users', {
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					autoIncrement: true,
					primaryKey: true
				},
				nome: {
					type: Sequelize.STRING,
					allowNull: false
				},
				sobrenome: {
					type: Sequelize.STRING,
					allowNull: false
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false
				},
				idade: {
					type: Sequelize.STRING,
					allowNull: false
				},
			});

  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example: */
     await queryInterface.dropTable('users');

  }
};
