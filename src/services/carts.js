import axios from "axios";
import { getProductById } from "./products";

const urlCart = `https://fakestoreapi.com/carts`;

export const getUserCart = (user_id) => {
  const cart = axios
    .get(`${urlCart}/user/${user_id}`)
    .then((json) => json.data);
  return cart;
};

export const addNewCart = (cart) => {
  fetch(urlCart, {
    method: "POST",
    body: JSON.stringify(
      cart
      // {
      //     userId:5,
      //     date:2020-02-03,
      //     products:[{productId:5,quantity:1},{productId:1,quantity:5}]
      // }
    ),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};

export const getMapUserCart = (userId) => {
  return getUserCart(userId)
    .then((res) => res)
    .then((userCart) => {
      console.log("uc", userCart);
      const userCartPos = {
        userId: userCart[0].userId,
        date: new Date().toLocaleString("en-GB"),
        products: [],
      };

      userCartPos.products = userCart[0].products.map((cartProdi) => {
        return getProductById(cartProdi.productId).then((prod) => {
          return { ...cartProdi, title: prod.title, price: prod.price };
        });
      });

      return userCartPos;
    });
  // console.log(userCart);
};
