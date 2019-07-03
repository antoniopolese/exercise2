import React, { Component } from 'react';
import CartList from './components/CartList'
import ProductList from './components/ProductList'
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      cart: []
    };

    this.addToCart = this.addToCart.bind(this);
    this.delCart = this.delCart.bind(this);
  }

  showProduct = () => {

    fetch('https://5c3c998d29429300143fe514.mockapi.io/api/v1/products')
      .then(result => result.json())
      .then(result => this.setState(
        {
          items: result
        }
      ))
  }

  addToCart(item){
    this.setState({
      cart: [...this.state.cart, item],
    })
  }
  
  delCart(item){
    const newItems = this.state.cart.filter(newItem => {
      return newItem !== item;
    });

    this.setState({
      cart: [...newItems]
    })
  }

  componentDidMount() {
    this.showProduct()  
  }

  render() {
    return (
        <main className="App">
          
          <section className="listing">
            <h1 className="listing__title">Listing Products</h1>
            <ProductList
              items={this.state.items}
              addToCart={this.addToCart}
            ></ProductList>

            <h2 className="listing__title">Your Cart</h2>
            <CartList 
              cart={this.state.cart}
              delCart={this.delCart}
            />

          </section> 

        </main>
    );
  }
}

export default App;
