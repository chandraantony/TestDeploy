'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
   // category.belongsToMany(article, { as: 'Users', through: { model: UserRole, unique: false }, foreignKey: 'role_id' });
  };
  return category;
};