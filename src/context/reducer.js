export const InitialState = {
    basket: [],
 
    user:null
}

//Selector
export const getBasketTotal = (basket) => (basket?.reduce((total, item) => (total + item.price), 0));


export const removeItem = (basket, items) => {
    const existingItem = basket?.find((product) => (product.id === items.id))

    if (existingItem) {
        return (
            basket.filter((product) => (existingItem.id !== product.id))
        )
    }
}

const reducer = (state, action) => {

    // console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":

            const Index = state.basket.findIndex((item) => (item.id === action.id))
            let newBasket = [...state.basket]
            if (Index >= 0) {
                newBasket.splice(Index, 1);

            }

            return {
                ...state,
                basket:newBasket,
            };

        case "SET_USER":
            return {
                ...state,
                user: [...state.basket, action.user],
            };

        // basket: state.newBasket.filter((item) => (item.id !== action.id))

        default:
            return state;
    }
}

export default reducer