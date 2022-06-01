import React, { useContext } from 'react'
import Subtotal from '../Subtotal/Subtotal.component'
import CheckoutProduct from '../Checkout-product/Checkout.component'
import { useStateValue } from '../../context/StateProvider'
import './Checkout.styles.css'
const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue()

    console.log(basket)
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG" alt="" />

                <div>
                    <h2 className="checkout__title">
                        <h3>hello {user?.email}</h3>
                        Your Shopping Cart
                    </h2>

                    {/* 
                    {Object.keys(basket).map((title) => {

                        const items = basket[title];
                    
                        return (
                            <CheckoutProduct items={items} />
                        )

                    })} */}

                    {basket.map((items) => (<CheckoutProduct items={items} />))}
                </div>

            </div>

            <div className="checkout__right">


                <Subtotal />
            </div>



        </div>
    )
}

export default Checkout