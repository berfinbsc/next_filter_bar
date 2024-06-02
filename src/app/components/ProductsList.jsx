import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from './FilterMenu.module.css';

const ProductsList = ({ products }) => {
const [productList,setProduct] =useState([]);

useEffect(() =>{
    try {
        if(products){
            setProduct(products);;
        }
        console.log(productList);
    } catch (error) {
        console.error(error);
    }
},[products])

  return (
    <div className={styles.productlist}>
        <h1>Porduct List</h1>
      {productList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
