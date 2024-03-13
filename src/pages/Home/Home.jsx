import style from './Home.module.css'
import Slider from '../../components/Slider/Slider'
import PopulerProducts from '../../components/PopularProducts/PopulerProducts'

const Home = () => {
  return (
    <div className={style.home}>
      <Slider className={style.slider}/>
      <PopulerProducts />
    </div>
  )
}

export default Home