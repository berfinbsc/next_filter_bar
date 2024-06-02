'use client';
import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import ProductsList from './components/ProductsList';

export default function Home() {
  const [data, setData] = useState([]);
const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/filters');
        const res2 = await fetch('http://localhost:3000/api/products');

        if (!res.ok) {
          throw new Error('Failed to fetch filters');
        }
        if (!res2.ok) {
          throw new Error('Failed to fetch products');
        }
        const filters = await res.json();
        const products = await res2.json();
        
        setData(filters);
        setData2(products);

        console.log(filters);
        console.log(products);

      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <FilterBar data={data} />
      <ProductsList products={data2} />
    </div>
  );
}