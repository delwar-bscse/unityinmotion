import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  orders: [],
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

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder(state, action) {
      const newOrder = {
        uid:uuidv4(),
        date:generateDate(),
        location:"",
        item: action.payload.item,
      };
      state.orders.push(newOrder);
      state.payment=action.payload.payment;
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
