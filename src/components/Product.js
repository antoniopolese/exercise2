
import React from 'react';

class Product extends React.Component {

    render () {
        
        const item = this.props.item;
        
        return (
            <figure className="product" key={item.id}>
                <img className="product__image" src={item.image} alt={item.name} />
                <figcaption className="product__info">
                    <h2 className="product__name">{item.name}</h2>
                    <span className="product__price">{item.price} €</span>
                    {item.promo_buy_one_get_one_free ? <span className="product__promo">Promo: Buy one get one free</span> : '' }
                </figcaption>
                <button className="product__addcart" onClick={this.props.handleClick.bind(this, item)}>Buy</button>
            </figure>
        )
        
    }
}

export default Product;