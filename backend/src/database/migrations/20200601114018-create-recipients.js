module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      street: {
        type: Sequelize.STRING,
        allownull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allownull: false,
      },
      complement: {
        type: Sequelize.STRING,
        allownull: false,
      },
      state: {
        type: Sequelize.STRING,
        allownull: false,
      },
      city: {
        type: Sequelize.STRING,
        allownull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('recipients');
  },
};
