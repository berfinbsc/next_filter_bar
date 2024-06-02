'use client';
import React, { useEffect, useState } from 'react';
import styles from './FilterMenu.module.css';
import useCategoryStore from '../utils/categoryStore';

const FilterBar = ({data}) => {

  const [filter, setFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  const { selectedFilters, addFilter, removeFilter } = useCategoryStore();
  

  useEffect(() => {
    if (data) {
      setFilter(data);
      console.log(filter);
    }
  }, [data]);





  const handleCheckboxChange = (category, filter) => {
    if (selectedFilters[category]?.includes(filter)) {
      removeFilter(category, filter);
    } 
    
    else {
      addFilter(category, filter);
    }
    console.log(selectedFilters);

  };





  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

 


  return (
    <div className={styles.filterMenu}>
      {filter.map((item, index) => (
        <div key={index}>
          <div className={styles.menuItem} onClick={() => toggleDropdown(index)}>
            <span>{item.name}</span>
            <svg
              className={`${isOpen === index ? styles.open : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isOpen === index && (
            <div className={styles.dropdown}>
              {item.categories.map((category, catIndex) => (
                <div
                  key={catIndex}
                  className={styles.category}
                  onClick={() => handleCheckboxChange(item.name, category)}
                >
                  <div
                    className={`${styles.checkbox} ${
                      selectedFilters[item.name]?.includes(category) ? styles.checked : ''
                    }`}
                  />
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;



//veri tabanından gercek kategorıelrı alma
//Listeleme
//secılen kategorılerı zustand ıle guncelleme-tutma
//urunlerı cekme
//secılı fıltre varsa? yoksa ?
//urunlerı lısteleme
//her categorı degsıtıgınde yıne urun lısteleme