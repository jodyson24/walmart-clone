class UserAction{
    constructor(){
        this.users = {
            users : this.getData()
        }
    }
    get(){
        return this.products
    }

    set(user){
        return this.users.push(user)
    }

    async getData(){
        const response = await fetch(`http://206.189.124.254:9000/users`);
        const json = await response.json();
        return json
    }

    async create(requestOptions){
        const response = await fetch('http://206.189.124.254:9000/create/user', requestOptions);
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

export default UserAction