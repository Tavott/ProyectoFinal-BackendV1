const path = require('path');
const fs = require("fs");


const pat = path.join(`${__dirname}../../db/products.json`);


class ProductManager {
    constructor(path) {
        this.products = [];
        this.lastId = 0;
    }


    addProduct = async (product)=>{
        try {
            this.products = JSON.parse(await fs.promises.readFile(pat, 'utf-8'));
            // Validacion de datos recibidos
            if (product.id || product.title || product.description || product.price || product.code || product.stock || product.category || product.thumbnails) {
                this.products.push(product);
                console.log(`Product ${product.title} add`);
                // await fs.writeFile(pathJson, JSON.stringify(this.products, null, 2));
                await fs.promises.writeFile(pat, JSON.stringify(this.products));
            } else {
                console.error(`Error: Code repetido. El code ${product.code} ya esta en uso`);
            }
        } catch (error) {
            console.error('Error: No se pudo agregar el producto');
            throw new Error(error);
        }
    };


    //Metodo que muestra todos los productos.
    //Este Get no funciona. posible eliminar.
    // getProducts() {
    //     try {
    //         const data = fs.promises.readFileSync(this.path);
    //         return JSON.parse(data);
    //     } catch (error) {
    //         return [];
    //     }
    // }

    //Metodo que muestra el producto en base el ID. 
    getProductById = async (productId) => {
        const data = await fs.promises.readFile(pat, "utf-8");
        const productsById = JSON.parse(data);
        const product = productsById.find((product) => product.id === productId);
        if (product) {
            console.log(product)
            return product;
        } else {
            console.log("Error: producto no encontrado");
        }
    };

    //Metodo que actualiza el objeto, sin eliminar el ID.  
   
    updateProduct = async(id, data) =>{
        try {
            let fileProducts = JSON.parse(await fs.promises.readFile(pat, 'utf-8'));
            let productFoundIndex = fileProducts.findIndex(prod => prod.id === Number(id));
            if(productFoundIndex < 0){
                return `Product id: ${id}, not found`;
            }else{
                fileProducts[productFoundIndex] = {id: id, ...data};
                await fs.promises.writeFile(pat, JSON.stringify(fileProducts,null,2));
                console.log("Product update Succefully");
            }
        } catch (error) {
            console.log(`Error: the Product wasn't update`);
            throw new Error(error);
        }
    };

    //Recibe un ID y debe eliminar el producto
    deleteProduct = async (deleteById) => {
        const data = await fs.promises.readFile(pat, "utf-8");
        const products = JSON.parse(data);

        const deleteItemFilter = products.filter(
            (product) => product.id !== deleteById
        );

        if (deleteItemFilter.length === products.length) {
            console.log(`Error: No se encontró producto con ID ${deleteById}`);
            return;
        }

        fs.writeFile(pat, JSON.stringify(deleteItemFilter), (err) => {
            if (err) throw err;
            console.log("Producto borrado con éxito desde deleteProduct");
        });
    };

    async getData() {
        const data = await fs.promises.readFile(this.path, "utf-8");
        return data;
    }

    async getAll() {
        const data = await this.getData();
        return JSON.parse(data);
    }

    //A modo de Test nuevo Metodo para traer productos
    getProducts = async ()=>{
        try {
            //Productos del archivo products.json
            const content = await fs.promises.readFile(pat);
            //Verifico si hay productos en el archivo products.json
            if(content.length === 0){
                console.log('Products no found');
                return content;
            } 
            return JSON.parse(content);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        };
    };
}

//Export de la clase ProductManager
module.exports = ProductManager;


