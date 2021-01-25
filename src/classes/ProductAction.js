class ProductAction {
    constructor(){
        this.products = {
            products : this.getData()
        }
    }

    get(){
        return this.products
    }

    set(product){
        return this.products.push(product)
    }

    async getData(){
        const response = await fetch(`http://206.189.124.254:9000/products`);
        const json = await response.json();
        return json
    }
    onClick(){
        alert('clicked')
    }

}
export default ProductAction