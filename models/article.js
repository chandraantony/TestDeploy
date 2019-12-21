'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  article.associate = function(models) {

     article.belongsTo(models.category, {
     as : 'category_Id',
     foreignKey : 'categoryId',
     })

     article.belongsTo(models.user, {
      as : 'author_Id',
      foreignKey : 'authorId',
     })

     article.hasMany(models.comment, {
       as : 'article_id', 
       foreignKey : 'articleId'});

  };
  return article;
};