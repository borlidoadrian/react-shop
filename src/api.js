import {
  PRODUCTS,
  PROMOTED,
  PURCHASES,
  CHECKOUT,
  BASE_URL,
  GET,
  POST,
  CHARACTERS,
} from "./config/Constants";

export const apiLogin = async () => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 3000 + 500)
  );
  const characters = CHARACTERS;
  const charactersLength = characters.length;

  return Array.from({ length: 36 }, (_, i) => i)
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join("");
};

export const apiGetProducts = async (token) => {
  return request(token, PRODUCTS, GET);
};

export const apiGetPromoted = async (token) => {
  return request(token, PROMOTED, GET);
};

export const apiGetPurchases = async (token) => {
  return request(token, PURCHASES, GET);
};

export const apiCheckout = async (cart, token) => {
  return request(token, CHECKOUT, POST, JSON.stringify(formatBody(cart)));
};

const request = async (token, path, method, body) => {
  try {
    let response = await fetch(BASE_URL + path, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: body,
    });
    let data = await response.json();
    return data;
  } catch (e) {}
};

const formatBody = (cart) => {
  let body = { cart: [] };
  cart.forEach((e) => {
    body.cart.push({ quantity: e.quantity, product_id: e.id });
  });
  return body;
};
