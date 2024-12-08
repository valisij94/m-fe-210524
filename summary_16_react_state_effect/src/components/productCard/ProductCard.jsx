import styles from './ProductCard.module.css';

export default function ProductCard( {product} ) {

  return (
    <div className={styles.productCard}>
      <img src={product.images[0]} alt=''/>
      <h3 className='productName'>{product.title}</h3>
      <p>{product.category}</p>
      <p className='productPrice'>{product.price}</p>
      <p className='productDescription'>{product.description}</p>

      <div className={styles.tagsContainer}>
        {
          product.tags.map( tag => <div className={styles.tag} key={tag}>{tag}</div>)
        }
      </div>
    </div>
  )
}