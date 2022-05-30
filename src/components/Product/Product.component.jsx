import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './Product.styles.css'
const Product = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue()

    console.log(basket)
    const addToBasket = () => {

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }

        })
    }
    return (

        <div className="product" key={id}>

            <div className="product__info "  >

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

            <button onClick={addToBasket} className='product__basketbutton'>
                Add to Basket
            </button>

        </div>
    )
}

export default Product