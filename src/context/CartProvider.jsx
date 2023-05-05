/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { getMapUserCart, getUserCart } from '../services/carts'
import { getProductById } from "../services/products";

const CartContext = createContext();

const initCart = () => {
  const user = localStorage.getItem("userKey");
  // console.log("user localstoreages", JSON.parse(user));
  const userCart = user === null ? { userId: 0, date: "", products: [] } : getUserCart(JSON.parse(user).id)
    .then(res => res)

  return userCart
};

export const CartProvider = ({ children }) => {
  /* eslint-disable no-case-declarations */
  const USER_ID = 1
  const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'init':
        return getMapUserCart(payload.id).then(resp => console.log('init', resp))
      case "add":
        if (state.products.length === 0) {
          const newCart = {
            userId: USER_ID,
            date: new Date().toLocaleString('en-GB'),
            products: [{ productId: payload.id, title: payload.title, price: payload.price, quantity: 1 }]
          }
          return state = newCart
        }
        else {
          const productExistent = state.products.find(x => x.productId === payload.id)
          if (productExistent === undefined) {
            return { ...state, products: [...state.products, { productId: payload.id, title: payload.title, price: payload.price, quantity: 1, }] }
          } else {
            const products = state.products.map(prod => {
              return prod.productId === payload.id ? { ...prod, quantity: prod.quantity + 1 } : prod
            })
            return { ...state, products: products }
          }
        }
      case "delete":
        const products = state.products.map(prod => {
          return prod.productId == payload.id ? { ...prod, quantity: prod.quantity - 1 } : prod
        })

        return { ...state, products: products.filter(x => x.quantity > 0) }
      case "update":
        const productsNow = state.products.map(prod => {
          return prod.productId === payload.id ? { ...prod, quantity: payload.quantity } : prod
        })
        return { ...state, products: productsNow }

      default:
        break;
    }
  };

  const [cart, cartDispatch] = useReducer(cartReducer, initCart());

  return (
    <CartContext.Provider value={[cart, cartDispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
