const Sequelize = require('sequelize');
const database = new Sequelize('produtoX', 'root', '123456', {dialect: 'mysql', host: 'localhost', port: '3306'});


const produto = database.define('produtos', {
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
      },
      unidade: {
        type: Sequelize.STRING(6),
        allowNull: true
      }, 
      // createdAt: {
      //   type: Sequelize.DATE,
      //   allowNull: true
      // }, 
      // updatedAt: {
      //   type: Sequelize.DATE,
      //   allowNull: true
      // }, 
        timestamps: false
    });

    module.exports = produto;
