/**
 * 1. Пристрелочная. Доделываем задачу с последней лекции. Создайте компонент `CategoriesBlock`. В нем нужно запросить категории товаров по адресу `https://dummyjson.com/products/categories`, и вывести первые 10 категорий в виде "плашек". При клике на категорию, нужно переходить на роут `/products/:CATEGORY_NAME`.
 */

import { useEffect } from "react";
import { useState } from "react";
import styles from './CategoriesBlock.module.css';
import { useNavigate } from "react-router";

export default function CategoriesBlock() {

  const [categories, setCategories] = useState( [] );

  const navigate = useNavigate();

  useEffect( () => {
    fetch('https:/dummyjson.com/products/categories')
      .then(resp => resp.json())
      .then(data => setCategories(data.slice(0,10)));
  }, []);

  return (
    <div className={styles.categoriesContainer}>
      {
        categories.map( el => <div key={el.slug} className={styles.categoryChip} onClick={() => navigate('/products/' + el.slug)}>
          <p>{el.name}</p>
        </div>)
      }
    </div>
  )
}