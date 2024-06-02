'use client';
import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import ProductsList from './components/ProductsList';
import styles from './components/FilterMenu.module.css';

export default function Home() {
 

  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/filters');
        if (!res.ok) {
          throw new Error('Failed to fetch filters');
        }
        const data = await res.json();
        setFilters(data);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchFilters();
    fetchProducts();
  }, []);

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