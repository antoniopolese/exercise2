
import React from 'react';

class ProductCart extends React.Component {

    render () {
        
        const item = this.props.item;
        
        return (
            <figure className="product" key={item.id}>
                <img className="product__image" src={item.image} alt={item.name} />
                <figcaption className="product__info">
                    <h2 className="product__name">{item.name}</h2>
                    <span className="product__price">{item.price} €</span>
                </figcaption>
                <button className="product__delcart" onClick={this.props.delClick.bind(this, item)}>remove</button>
            </figure>
        )
        
    }
}

export default ProductCart;