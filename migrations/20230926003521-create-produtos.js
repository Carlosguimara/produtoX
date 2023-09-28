'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco: { 
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      observacao: { 
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
