class ProductManager{
    constructor() {
        this.products = []
        this.nextId = 1
    }

    addPruduct(product){
        const isDuplicate = this.products.some((p) => p.code === product.code)
        if(isDuplicate){
            console.log("Error: Product Duplicated")
            return
        }
        product.id = this.nextId++
        this.products.push(product)
    }
    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((product) => product.id === id)
        if(product){
            return product
        }
        else{
            console.log("Error: Not found")
        }
    }
}


const productManager = new ProductManager()
console.log(productManager.getProducts())
productManager.addPruduct({
    title: "Producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
})
console.log(productManager.getProducts())

productManager.addPruduct({
    title: "Producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
})

console.log(productManager.getProductById(1))