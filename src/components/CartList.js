
import React from 'react';
import ProductCart from '../components/ProductCart'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.renderItemsCart = this.renderItemsCart.bind(this);
        this.delClick = this.delClick.bind(this);
    }

    delClick(item) {
        this.props.delCart(item)
    }

    renderItemsCart(item) {
        return (
            
            <ProductCart
                key={item.id}
                item={item}
                delClick={this.delClick}
            ></ProductCart>
        );
    }


    render () {
        return (
            <React.Fragment>
                <span className="listing__count">{this.props.cart.length}</span>
                {this.props.cart.map(this.renderItemsCart)}
            </React.Fragment>
        )
        
    }
}

export default ProductList;