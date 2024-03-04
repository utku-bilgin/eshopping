import React from 'react'
import style from './Home.module.css'
import Slider from '../../components/Slider/Slider'
import PopulerProducts from '../../components/PopularProducts/PopulerProducts'

const Home = ({products}) => {
  return (
    <div className={style.home}>
      <Slider className={style.slider}/>
      <PopulerProducts products={products}/>
    </div>
  )
}

export default Home