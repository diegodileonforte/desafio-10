const express = require('express')

const app = express()

const productsRoutes = require('../routes/products')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render("home")
})

app.use('/productos', productsRoutes)

app.listen(8080)