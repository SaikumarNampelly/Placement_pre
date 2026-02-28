import ProductCard from "./ProductCard"
function Product() {
  const handleAdd=()=>{
  }
  return(
    <div>
      <ProductCard productname="Laptop" price={2000} onAddToCart={handleAdd}/>
      <ProductCard productname="iphone" price={150000} onAddToCart={handleAdd}/>
      <ProductCard productname="watch" price={5000} onAddToCart={handleAdd}/>
    </div>
  )
}
export default Product;
