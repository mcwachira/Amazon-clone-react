import React from 'react'
import './Checkout-product.styles.css'
import { useStateValue } from '../../context/StateProvider'
const CheckoutProduct = ({ items }) => {

    const [{ basket }, dispatch] = useStateValue()
    const removeFormBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })



    }

    const { id, title, rating, price, image } = items
    return (
        <div className="checkoutProduct" key={id}>

            <img className='checkoutProduct__image' src={image} alt="product icon" />


            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>

                    <strong>
                        {price}
                    </strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (<p> *</p>))}


                </div>

                <button onClick={removeFormBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct