import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import ProductAction from './classes/ProductAction';
import UserAction from './classes/UserAction'
import Cart from './components/Cart'
import Shop from './components/Shop'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProductItem from './components/Product';
import Notice from './components/Notice'


class App extends Component {
  constructor(props) {
    super(props);
    this.ProductAction = new ProductAction()
    this.UserAction = new UserAction()
    this.state = {
      sales: [],
      users: [],
      products: [],
      orders: [],
      cart: [],
      counter: 0,
      viral: [],
      AirConditioners: [],
      laptops: [],
      Tablets: [],
      details: [],
      quantity: '',
    }

    this.handleQtyChange = this.handleQtyChange.bind(this);
  }

  handleQtyChange(e) {
    let qty = e.target.value
    console.log(qty)
    this.setState({ quantity: qty })
  }

  showDetails = (_id) => {
    let id = _id
    let item = this.state.products.find(product =>
      product._id === id
    ); this.setState({ details: item })
  }
  addToCart = (_id, qty) => {
    let arr = this.state.details
    qty = this.state.quantity
    console.log(qty)
    if (arr) {
      let itemObj = {
        image: arr.image,
        id: arr._id,
        name: arr.name,
        qty: qty,
        price: arr.price,
        itemTotal: function () {
          return this.price * this.qty
        }
      };
      this.setState({ cart: [...this.state.cart, itemObj] })
    } else {
      console.log("invalid product")
    }
  }
  updateQty(_id, qty, e) {
    qty = e.target.value
    console.log(qty)
    this.setState({ quantity: qty })
    let quantity = this.state.quantity
    let content = this.state.cart.map(e => {
      if (e.id === _id)
        e.qty = quantity;
      //return e;
    });
    this.setState({ cart: content })
    console.log(content)
  }

  removeFromCart = (index) => {
    console.log("un-clicked")
    let id = index
    const { cart } = this.state
    this.setState({
      cart: cart.filter((e, i) => {
        return i !== id
      }),
    });
  }
  getDate() {
    var d = new Date();
    d.getFullYear();
    d.getMonth();
    d.getDate();
  }

  // checkOut() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify({
  //       date: (this.getDate).getTime()
  //     })
  //   }
  // }

  authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.authdata) {
      return { 'Authorization': 'Basic ' + user.authdata };
    } else {
      return {};
    }
  }

  login(email, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };
    return fetch(`http://206.189.124.254:9000/login`, requestOptions)
      .then(this.handleResponse)
      .then(user => {
        if (user) {
          user.authdata = window.btoa(email + ':' + password);
          localStorage.setItem('user', JSON.stringify(user));
          console.log("successful")
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getAll() {
    const requestOptions = {
      method: 'GET',
      headers: this.authHeader()
    };

    return fetch(`http://206.189.124.254:9000/users`, requestOptions).then(this.handleResponse);
  }

  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          this.logout();
          window.location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }

  async handleSubmit(user) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }
    console.log(user)
    const response = await fetch('http://206.189.124.254:9000/register', requestOptions);
    const data = await response.json();
    console.log(data);

    this.setState({ users: [...this.state.users, user] });
  }
  async componentDidMount() {
    let products = await this.ProductAction.getData()
    this.setState({
      products: products
    })

    let users = await this.UserAction.getData()
    this.setState({
      users: users
    })

    let viral = this.state.products.filter(product =>
      product.category === "viral"
    ); this.setState({
      viral: viral
    })

    let AirConditioners = this.state.products.filter(product =>
      product.category === "Air-conditioners"
    ); this.setState({
      AirConditioners: AirConditioners
    })

    let laptops = this.state.products.filter(product =>
      product.category === "laptops"
    ); this.setState({
      laptops: laptops
    })
  }
  render() {
    return (
      <div className="App">
        <Router>

          <Header counter={this.state.counter} />

          <Switch>
            <Route exact path="/">
              <Home products={this.state.products} laptops={this.state.laptops} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={this.state.cart} removeItem={this.removeFromCart}
                quantity={this.state.quantity} updateQty={this.updateQty} />
            </Route>
            <Route exact path="/shop">
              <Shop products={this.state.products} showDetails={this.showDetails}
                addToCart={this.addToCart}
              />
            </Route>
          </Switch>
          <Route exact path="/SignIn">
            <SignIn users={this.state.users} login={this.login} />
          </Route>
          <Route exact path="/SignUp">
            <SignUp handleSubmit={this.handleSubmit} />
          </Route>
          <Route path="/product/:id" >
            <ProductItem details={this.state.details} products={this.state.products} quantity={this.state.quantity}
              addToCart={this.addToCart} handleQtyChange={this.handleQtyChange} />
          </Route>
          <Route path="/notice">
            <Notice cart={this.state.cart} />
          </Route>

        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
