import React, { useState, useEffect } from "react";
import style from "./Slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const slides = [
    'https://images.macrumors.com/t/b8FTZ55ZVYIxQ0en3RW7B9ntwKU=/800x0/article-new/2023/08/iPhone-14-Pro-vs-iPhone-15-Pro-Feature-2.jpg?lossy',
    'https://www.hwupgrade.it/immagini/iphone15pro_00005.jpg',
    'https://www.hwupgrade.it/immagini/iphone15pro_00001.jpg',
    'https://www.hwupgrade.it/immagini/iphone15pro_00003.jpg',
    'https://i3.wp.com/crast.net/img/2023/06/iPhone-15-when-it-is-presented-and-when-it-can.jpeg?resize=1140,570'


  ];

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setProgress((prev) => prev + (100 / 3000) * 100);
        if (progress >= 100) {
          nextSlide();
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [currentSlide, progress, isHovered]);

  const handleMouseEnter = () => {
    clearInterval();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style.carousel}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <button onClick={prevSlide} className={`${style.carouselbutton} ${style.prevSlide}`}>
        &lt;
      </button>
      <div className={style.progressContainer}>
        <div
          className={style.progressCircle}
          style={{ background: `conic-gradient(#3498db ${progress}%, #ecf0f1 0%)` }}
        />
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className={style.carouselimage}
        />
      </div>
      <button onClick={nextSlide} className={`${style.carouselbutton} ${style.nextSlide}`}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
