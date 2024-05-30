'use client';
import { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';

// ...

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/filters');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const filters = await res.json();
        setData(filters);
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
    </div>
  );
}
