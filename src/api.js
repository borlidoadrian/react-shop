import * as constants from "./config/Constants";

export const login = async () => {
  console.log("LLEGO ACA");
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 3000 + 500)
  );
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  return Array.from({ length: 36 }, (_, i) => i)
    .map(() => characters.charAt(Math.floor(Math.random() * charactersLength)))
    .join("");
};

export const getProducts = async (token) => {
  return request(token, PRODUCTS, "GET");
};

export const getPromoted = async (token) => {
  await request(token, PROMOTED, "GET");
};

export const getPurchases = async (token) => {
  await request(token, PURCHASES, "GET");
};

export const checkout = async (cart, token) => {
  return request(token, CHECKOUT, "POST", JSON.stringify(formatBody(cart)));
};

async function request(token, path, method, body) {
  try {
    let response = await fetch(BASE_URL + path, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });
    return response;
  } catch (e) {
    console.error(e);
  }
}

const formatBody = (cart) => {
  let body = { cart: [] };
  cart.forEach((e) => {
    body.cart.push({ quantity: e.quantity, product_id: e.id });
  });
  return body;
};
