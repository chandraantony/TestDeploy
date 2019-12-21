const models = require('../models')
const Articles = models.article
const Category = models.category
const User     = models.user


exports.index = (req, res) => {
    Articles.findAll({}).then(article=>res.send(article))
}

exports.showPerCatagory = (req, res) => {
    Articles.findAll({
        include : [
            {
                model : Category,
                as : "category_Id",
            },
            {
                model : User,
                as : "author_Id",
            }
        ],
        where :{
            categoryId :req.params.id
        }
    }).then(article=> res.send(article))
}


exports.showAll = (req, res) => {
    Articles.findAll({
        include : [
            {
                model : Category,
                as : "category_Id",
            },
            {
                model : User,
                as : "author_Id",
            }
        ],
    }).then(article=> res.send(article))
}

exports.showArticle = (req, res) => {
    Articles.findAll({
        include : [
            {
                model : Category,
                as : "category_Id",
            },
            {
                model : User,
                as : "author_Id",
            }
        ],
        where :{
            id :req.params.id
        }

    }).then(article=> res.send(article))
}

exports.showPopular = (req, res) => {
    Articles.findAll({
        include : [
            {
                model : Category,
                as : "category_Id",
            },
            {
                model : User,
                as : "author_Id",
            }
        ],
        order: [
            ['view', 'DESC'],
        ],
    }).then(article=> res.send(article))
}


