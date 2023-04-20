# ProyectoFinal-BackendV1
Primera entrega Proyecto Final

La Ruta GET/ debera listar todos los productos (incluyendo limitacion)

//Utilizando Metodo GET
http://localhost:8080/api/products
http://localhost:8080/api/products?limit=5

La ruta POST/ debera agregar un nuevo producto con los campos.(title,description,code,price,status,stock,thumbnails)

//Utilizando Metodo POST
http://localhost:8080/api/products

La ruta PUT/:id debera tomar un producto y actualizarlo por campos enviados en el Body.

//Utilizando Metodo PUT
http://localhost:8080/api/products/2

La Ruta DELETE/:pid debera eliminar el producto con el pid indicado

La Ruta DELETE/:pid debera eliminar el producto con el pid indicado

## Carrito

La ruta POST/ debera crear un nuevo carrito con la siguiente estructura.

-ID

-Product

## Carrito

La ruta POST/ debera crear un nuevo carrito con la siguiente estructura.

-ID

-Product

La ruta GET/cid debera listar los productos que pertenezcan al carrita con el parametro cid proporcionados.

//Metodo GET
http://localhost:8080/api/carts/2

La Ruta POST /:cid/product/p:id debera agregar el producto al arreglo “products” del carrito seleccionado.

-product Solo debe contener el ID Producto

-quantity debe contener el numero de ejemplares de dicho producto. El producto, de momento, se agregara de uno en uno.
http://localhost:8080/api/carts/2/product/4

