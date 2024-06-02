import React, { useEffect, useState } from 'react';
import styles from './FilterMenu.module.css';

const ProductCard = ({ product }) => {
const [productCard, setProductCard] = useState({});

useEffect(()=>{
    try {
        if(product){
            setProductCard(product);
        }
        console.log(productCard);
    } catch (error) {
        console.error(error);
    }
},[product])

  return (
    <div className={styles.productCard}>
      <h2>{productCard.CARUNVAN}</h2>
      <p>{productCard.CARUNVAN3}</p>
      <p>{productCard.CAROZKOD3}</p>
      <p>{productCard.CAROZKOD4}</p>
      <p>{productCard.CARGRADE}</p>
      <p>{productCard.CARCATEGORY}</p>
    </div>
  );
};

export default ProductCard;
