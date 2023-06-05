const productLoader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error('404 product not found');
  }
};

export default productLoader;
