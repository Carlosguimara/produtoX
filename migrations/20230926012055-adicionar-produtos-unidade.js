'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('produtos', 'unidade', {
      type: Sequelize.STRING(6),
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produtos', 'unidade');
  }
};
