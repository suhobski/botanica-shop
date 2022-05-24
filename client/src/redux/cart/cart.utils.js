export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = cartItems.map((item) => {
    if (item.isAddedNow) {
      return { ...item, isAddedNow: false };
    }
    return item;
  });

  const existingCartItem = newCartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.isAddedNow = true;
    return newCartItems;
  }

  return [{ ...itemToAdd, quantity: 1, isAddedNow: true }, ...newCartItems];
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
