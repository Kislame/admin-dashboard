const productsLoader = async () => {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error('couldnt fetch products');
  }
};

export default productsLoader;
