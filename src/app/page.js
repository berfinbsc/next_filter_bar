
import React from 'react';
import { getFilters } from './api/filters';
import FilterBar from './components/FilterBar';

export default function Home () {

const getData = async () => {
  const data = await getFilters();
console.log(data);
}
getData();

  

  return (
    <div>
      <h1>Hoşgeldiniz</h1>
      <FilterBar></FilterBar>
    </div>
  );
}

//prisma shema  OK
//findMany from prisma OK
//Bar designed  OK
// filters(server side package) => FilterBar(client) ?
//filtreleri listele
//zustan filtre işlemleri
//getAll Data =>List All Data
//dinamik olarak filtrele