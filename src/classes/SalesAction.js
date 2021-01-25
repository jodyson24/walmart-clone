class SalesAction {
    constructor(){
        this.sales = {
            sales : this.getData()
        }
    }

    get(){
        return this.sales
    }

    set(sale){
        return this.sales.push(sale)
    }

    async getData(){
        const response = await fetch(`http://206.189.124.254:9000/sales`);
        const json = await response.json();
        console.log(json);
    }

    async create(requestOptions){
        const response = await fetch('http://206.189.124.254:9000/create/sales', requestOptions);
        const data = await response.json();
        console.log(data);
    }

    // delete(){
    //     let id = e.target.getAttribute("data-attr")
    //     fetch(`http://206.189.124.254:9000/sales/${id}`, {
    //         "method": "DELETE",
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    update(){

    }
}
export default SalesAction