
import React, { useEffect, useState } from 'react';
import styles from './FilterMenu.module.css';

const FilterBar = () => {



  const [isOpen, setIsOpen] = useState(null);
  const [checkedCategories, setCheckedCategories] = useState([]);

  const toggleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const handleCheckboxChange = (category) => {
    if (checkedCategories.includes(category)) {
      setCheckedCategories(checkedCategories.filter((c) => c !== category));
    } else {
      setCheckedCategories([...checkedCategories, category]);
    }
  };

  const menuItems = [
    { label: 'Kategori 1', categories: ['Kategori 1.1', 'Kategori 1.2', 'Kategori 1.3'] },
    { label: 'Kategori 2', categories: ['Kategori 2.1', 'Kategori 2.2', 'Kategori 2.3'] },
    { label: 'Kategori 3', categories: ['Kategori 3.1', 'Kategori 3.2', 'Kategori 3.3'] },
  ];

  return (
    <div className={styles.filterMenu}>
      <div>
        {menuItems.map((item, index) => (
          <div key={index}>
            <div className={styles.menuItem} onClick={() => toggleDropdown(index)}>
              <span>{item.label}</span>
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
                    onClick={() => handleCheckboxChange(category)}
                  >
                    <div
                      className={`${styles.checkbox} ${
                        checkedCategories.includes(category) ? styles.checked : ''
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