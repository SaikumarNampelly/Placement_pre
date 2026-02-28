const ProductCard = ({ productname, price, onAddToCart }) => {
  const handleClick = () => {
    alert(`Added ${productname} to cart`);
    onAddToCart();
  };
  return (
    <div>
    <h1>Product Card</h1>
      <h3>{productname}</h3>
      <p>₹{price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
