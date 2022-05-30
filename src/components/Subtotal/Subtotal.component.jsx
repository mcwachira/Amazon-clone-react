import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.styles.css'
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../context/reducer'

const Subtotal = () => {

    const [{ basket }] = useStateValue()

    const totalPrice = () => {

        const total = basket.reduce((total, item) => (total + item.price), 0)
        return total;
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                displayType={'text'}
                renderText={(value) => (
                    <>

                        <p>
                            {/* show case number of items */}
                            Subtotal(   {basket?.length}, items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>

                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                //display amount
                thousandSeparator={true}
                prefix={"$"}
            />

            <button className='subtotal__button'>

                proceed to checkout</button>
        </div>
    )
}

export default Subtotal