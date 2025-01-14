import styles from './ProductCard.module.css';

export default function ProductCard( {product} ) {

  return (
    <div className={styles.productCard}>
      <h3>{product.title}</h3>
      <img className={styles.productCardImg} src={product.images[0]} />
      <p>{product.description}</p>
      <p className={styles.productCardPrice}>{product.price}</p>
      <div className={styles.productCardTags}>
        {
          product.tags.map( tag => <p key={tag} className={styles.productCardTag}>{tag}</p>)
        }
      </div>
    </div>
  )
}