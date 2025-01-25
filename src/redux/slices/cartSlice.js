import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  payment:{
    name:"",
    delevaryAddress:"",
    contact:"",
    paymentMethod:""
  }
};
const generateDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { id, name, quantity, price, productImg} = action.payload;
      const existingItem = state.items.find(item => item.id.toString() === id.toString());

      if (!existingItem) {
        state.items.push({
          id,
          name,
          productImg,
          quantity,
          price,
          totalPrice: (quantity * price),
          date:generateDate()
        });
      } else {
        existingItem.quantity=quantity;
        existingItem.totalPrice = (quantity * price);
      }
    },
    addpaymentInfo(state, action){
      state.payment = {
        ...state.payment,
        ...action.payload
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id.toString() !== id.toString());

      if (state.items.length) {
        state.payment = {};
      }
      
    }
  },
});

export const { addItemToCart, removeItemFromCart, addpaymentInfo } = cartSlice.actions;
export default cartSlice.reducer;
