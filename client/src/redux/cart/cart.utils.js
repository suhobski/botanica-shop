export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const increaseCartItem = (id, cartItems) => {
  const cart = [...cartItems];
  const currentItem = cart.find((item) => item.id === id);
  currentItem.quantity += 1;
  return cart;
};

export const decreaseCartItem = (id, cartItems) => {
  const cart = [...cartItems];
  const currentItem = cart.find((item) => item.id === id);
  currentItem.quantity -= 1;
  return cart;
};
