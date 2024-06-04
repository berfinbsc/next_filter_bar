'use client';
import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import ProductsList from './components/ProductsList';
import styles from './components/FilterMenu.module.css';
import useCategoryStore from './utils/categoryStore';

export default function Home() {
 
  const { selectedFilters } = useCategoryStore();
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res;
        if(!selectedFilters){
           res = await fetch('/api/products');

        }else{
           res = await fetch('/api/products',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ filters: selectedFilters }),
          });

        }
        if (!res.ok) {
          throw new Error('Failed to fetch filters');
        }
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchProducts();
  }, [selectedFilters]);














useEffect(() => {

  const fetchFilters = async () => {
    try {

      const res = await fetch('api/filters');

     console.log(res);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      console.log(data);
      setFilters(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  fetchFilters();

},[]);



  return (
    <div className={styles.container}>
      <h1>Hoşgeldiniz</h1>
      <div className={styles.mainContent}>
        <FilterBar data={filters} />
        <ProductsList products={products} />
      </div>
    </div>
  );


}