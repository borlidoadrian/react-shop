export const addArticle = (article) => {
  return {
    type: "add_article",
    payload: article,
  };
};

export const removeArticle = (article) => {
  return {
    type: "remove_article",
    payload: article,
  };
};

export const emptyCart = () => {
  return {
    type: "empty_cart",
  };
};
