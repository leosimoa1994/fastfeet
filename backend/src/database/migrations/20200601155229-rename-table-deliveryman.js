module.exports = {
  up: (queryInterface) => {
    return queryInterface.renameTable('deliveryman', 'deliverymans');
  },

  down: (queryInterface) => {
    return queryInterface.renameTable('deliverymans', 'deliveryman');
  },
};
