
import React from 'react';
import Product from '../components/Product'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.renderItems = this.renderItems.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        this.props.addToCart(item)
    }

    renderItems(item) {
        return (
            
            <Product
                key={item.id}
                item={item}
                handleClick={this.handleClick}
            ></Product>
        );
    }


    render () {
        return (
            <React.Fragment>
                {this.props.items.map(this.renderItems)}
            </React.Fragment>
        )
        
    }
}

export default ProductList;