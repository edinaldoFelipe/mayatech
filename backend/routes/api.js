const Router = require('express').Router()
const UrlController = require('./../controllers/UrlController')
require('dotenv').config()

Router.get('/', UrlController.index)
Router.get('/:short', UrlController.show)
Router.post('/', UrlController.create)

module.exports = Router;