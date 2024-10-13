import React, { useCallback, useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import './styles/filterSelect.css'

const FilterSelect = ({ setCategoryValue }) => {
  const [categories, getCategories] = useFetch('');

  useEffect(() => {
    getCategories("/products/categories");
  }, [getCategories]);

  const itemSelect = useRef();
  const handleChange = useCallback(() => {
    setCategoryValue(itemSelect.current.value);
    console.log(itemSelect.current.value);

    
  }, [setCategoryValue]);

  // console.log(categories);

  return (
    <select className="category__container" ref={itemSelect} onChange={handleChange}>
      <option value="">All products</option>
      {categories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
