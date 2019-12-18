'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('users', [
        {
        fullname: 'chandra',
        email : 'chandra,ant@gmail.com',
        username : 'JambuMan',
        password : '123123',
        isActive : false,
        },
        {
          fullname: 'Bembeng',
          email : 'Bembeng.ant@gmail.com',
          username : 'BembengMan',
          password : '123123',
          isActive : false,
        },
        {
          fullname: 'Moci',
          email : 'Moci.ant@gmail.com',
          username : 'MociMan',
          password : '123123',
          isActive : false,
        },  
        {
          fullname: 'Pisang',
          email : 'chandra.ant@gmail.com',
          username : 'PisangMan',
          password : '123123',
          isActive : false,
        }, 
        {
          fullname: 'Kiwi',
          email : 'chandra.ant@gmail.com',
          username : 'KiwiMan',
          password : '123123',
          isActive : false,
        }, 
        {
          fullname: 'Sawi',
          email : 'sawi.ant@gmail.com',
          username : 'sawiMan',
          password : '123123',
          isActive : false,
        }  
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};
