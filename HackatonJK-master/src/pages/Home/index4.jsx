import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider4 from './images/slider4.png'
import courusel4 from './images/courusel4.png'
import {useNavigate} from "react-router-dom";
function Home4() {
    const nav = useNavigate();
    function next(e){
        e.preventDefault();
        nav("/5");
    };
  return (
          <div className={cl.container}>
              <img className={cl.back1} src={slider4} alt="Image is here" />
              <div className={cl.back__text}>Аналитика покупок, ИИ рекомендации</div>
              <img className={cl.coursl} src={courusel4} alt="Image is here" />
              <button className={cl.myButton}  onClick={next}>
                  Далее
              </button>
          </div>

  );
}

export default Home4;
