export default function ProductCard( {product} ) {

  return (
    <div className='productCardContainer'>
      <h3 className='productName'>{product?.title}</h3>
      <p className='productPrice'>{product?.price}</p>
      <p className='productDescription'>{product?.description}</p>
    </div>
  )
}