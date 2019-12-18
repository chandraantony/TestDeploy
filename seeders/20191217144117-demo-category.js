'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [
        {
          name: 'Programing',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Sport',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Life Style',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Entertaiment',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Economy',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Bussines',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Health',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Food',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Technology',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: 'Politic',
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
       
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('categories', null, {});
  }
};
