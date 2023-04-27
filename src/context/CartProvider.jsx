/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const CartContext = createContext();

const getRandomId = () => {
  const id = Math.floor(Math.random() * 100000)
  console.log("id", id);
  return id
}

export const CartProvider = ({ children }) => {
  console.log("llegamos");
  const initCart = () => {
    const products = localStorage.getItem("products-cart")
    console.log("pipis", products);
    return products ? JSON.parse(products) : []
  }

  /* eslint-disable no-case-declarations */
  const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "add":
        const existe = state.find(x => Number(x.productId) === Number(payload.id))

        if (existe === undefined) {
          return [...state, { id: getRandomId(), productId: payload.id, title: payload.title, price: payload.price, count: 1 }
          ]
        } else {
          console.log("existe", existe);
          return state.map((x) => {
            return Number(x.productId) === Number(payload.id) ? { ...x, count: x.count + 1 } : x
          })
        }

      case "delete":
        console.log("payload id", payload.id)
        const newProducts = state.map((x) => {
          return x.id === payload.id ? { ...x, count: x.count - 1 } : x
        });

        console.log("newProducts", newProducts);
        return newProducts.filter(x => x.count !== 0);
      case "update":
        state.concat(payload);
        return;

      default:
        break;
    }
  };


  const [cart, cartDispatch] = useReducer(cartReducer, initCart() );

  return (
    <CartContext.Provider value={[cart, cartDispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext