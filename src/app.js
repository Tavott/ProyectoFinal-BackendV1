const express = require ('express');
const server = express();
// const app = express();

const PUERTO = 8080;

//import Routes
//Falta corregir Routes
const productsRouter = require('./routes/products/products.js');
const cartsRouter = require('./routes/cart/cart.js');

//Middleware
server.use(express.json());
server.use(express.urlencoded({extended: true}));
// server.use(router);

//Routes
server.use('/api/products', productsRouter);
server.use('/api/carts', cartsRouter);

//Listen Server
server.listen(PUERTO, () =>{
    console.log(`Servidor Iniciado en puerto ${PUERTO}`);
});
