import { addProduct, deleteProduct } from '../../redux/slices/cartSlice';
import styles from './ProductCard.module.css';
import { useDispatch } from 'react-redux';

export default function ProductCard( {product} ) {

  const dispatch = useDispatch();

  const addToCartBtnHandler = () => {
    dispatch( addProduct( {product, count: 1} ) );
  }

  const removeFromCartBtnHandler = () => {
    dispatch( deleteProduct(product) );
  }

  return (
    <div className={styles.productCard}>
      <h3>{product.title}</h3>
      <img className={styles.productCardImg} src={product.images[0]} />
      <p>{product.description}</p>
      <p className={styles.productCardPrice}>{product.price}</p>
      <button onClick={addToCartBtnHandler}>Add to cart</button>
      <button onClick={removeFromCartBtnHandler}>Remove from cart cart</button>
      <div className={styles.productCardTags}>
        {
          product.tags.map( tag => <p key={tag} className={styles.productCardTag}>{tag}</p>)
        }
      </div>
    </div>
  )
}