import React from 'react'
import style from './Products.module.css'
import FilteredProduct from '../../components/FilteredProduct/FilteredProduct.jsx'

const Products = () => {
  return (
    <div className={style.products}>
      <FilteredProduct className={style.FilteredProduct}/>
    </div>
  )
}

export default Products