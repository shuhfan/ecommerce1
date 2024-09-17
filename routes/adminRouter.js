const express = require('express')
const admin_router = express()
const session = require('express-session')
const config = require('../config/session')
admin_router.use(session({
    secret : config.userSession,
    resave: false,
    saveUninitialized: true,
    cookie : {secure:false}
}))
const auth = require('../middleware/adminAuthentication')
const adminController = require('../controllers/adminController')

admin_router.set('view engine','ejs')
admin_router.set('views','./views/admin')
admin_router.set('layout','../layouts/layout')

admin_router.get('/',adminController.loadDashboard)
admin_router.get('/products',adminController.loadProducts)
admin_router.get('/addProducts',adminController.loadAddProducts)
admin_router.get('/orders',adminController.loadOrders)
admin_router.get('/settings',adminController.loadSettings)

module.exports= admin_router;