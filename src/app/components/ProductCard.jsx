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
      <h2>{productCard.STKCINSI}</h2>
      {productCard.STKOZKOD1 ? <p>Stokta</p> : <p>Stok Tükendi</p>}
      <p>{productCard.CARGRADE }</p>
      <p>{productCard.CARCATEGORY}</p>
     
    </div>
  );
};

export default ProductCard;
