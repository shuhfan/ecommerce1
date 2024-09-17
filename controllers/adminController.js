


const loadDashboard = (req,res)=>{
    try {
        res.render('dashboard')
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadProducts = (req,res)=>{
    try {
        res.render('products')
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadAddProducts = (req,res)=>{
    try {
        res.render('addProduct')
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadOrders = (req,res)=>{
    try {
        res.render('orders')
    } catch (error) {
        console.log(error.message);
        
    }
}

const loadSettings = (req,res)=>{
    try {
        res.render('settings')
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    loadDashboard,
    loadProducts,
    loadAddProducts,
    loadOrders,
    loadSettings,
}