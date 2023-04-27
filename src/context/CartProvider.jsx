/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// {
//   userId:1,
//   date:2020-02-03,
//   products: [{productId:5,quantity:1},{productId:1,quantity:5}]
// }

const CartContext = createContext();

const getRandomId = () => {
  const id = Math.floor(Math.random() * 100000);
  console.log("id", id);
  return id;
};

const initCart = () => {
  const products = localStorage.getItem("products-cart");
  return products !== null ? JSON.parse(products) :  [{ userId: 1, date: Date.new, products: [] }];
};

export const CartProvider = ({ children }) => {
  /* eslint-disable no-case-declarations */
  const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "add":
        const productoEncontrado = miniCart.products?.find(
          (x) => Number(x.productId) === Number(payload.id)
        );

        if (productoEncontrado === undefined) {
            return state.products.concat({ productId: payload.id, quantity: 1 });
        }else {
          return state.map((x) => {
            return Number(x.productId) === Number(payload.id)
              ? { ...x, count: x.count + 1 }
              : x;
          });
        }      
      case "delete":
        console.log("payload id", payload.id);
        const newProducts = state.map((x) => {
          return x.id === payload.id ? { ...x, count: x.count - 1 } : x;
        });

        console.log("newProducts", newProducts);
        return newProducts.filter((x) => x.count !== 0);
      case "update":
        state.concat(payload);
        return;

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
