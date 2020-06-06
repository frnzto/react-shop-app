

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    
    if(existingCartItems) {
        return cartItems.map(cartItem =>{
            console.log(cartItem)
            return( cartItem.id === cartItemToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
            }
        )
    }
    return [ ...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItems= cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    )

    if(existingCartItems.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
    }
    
    return cartItems.map(cartItem => 
        cartItem.id === cartItemsToRemove.id ?
            {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
    )
}