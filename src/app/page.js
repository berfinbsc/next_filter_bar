
import React from 'react';
import handler from './api/filters';

export default function Home () {

const getData = async () => {
  const data = await handler();
console.log(data);
}
getData();

  

  return (
    <div>
      <h1>Hoşgeldiniz</h1>
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