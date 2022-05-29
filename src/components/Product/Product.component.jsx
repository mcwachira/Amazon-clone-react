import React from 'react'
import './Product.styles.css'
const Product = ({ title, image, price, rating }) => {
    return (

        <div className="product">

            <div className="product__info">

                <p >
                    {title}
                </p>
                <p className="product__price">
                    <small>$</small>

                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<p> *</p>))}


                </div>
            </div>
            <img className='product__image'
                src={image} alt="{title}" />

            <button className='product__basketbutton'>
                Add to Basket
            </button>

        </div>
    )
}

export default Product