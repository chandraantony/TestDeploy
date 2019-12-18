'use strict';
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define('follow', {
    userId: DataTypes.INTEGER,
    followingId: DataTypes.INTEGER
  }, {});
  follow.associate = function(models) {
    // associations can be defined here
  };
  return follow;
};