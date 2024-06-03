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

    fetchFilters();
  }, []);


useEffect(() => {

  const fetchProducts = async () => {
    try {
      console.log(selectedFilters);

      const params = new URLSearchParams();
        console.log(params);
      // Convert selectedFilters to query string format
      Object.keys(selectedFilters).forEach((key) => {
        selectedFilters[key].forEach((value) => {
          params.append(key, value);
        });
      });
console.log(params);
console.log(params.toString());
      const res = await fetch(`http://localhost:3000/api/products?${params.toString()}`);
     console.log(res);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
fetchProducts();

},[selectedFilters]);



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