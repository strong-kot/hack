import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider5 from './images/slider5.png'
import courusel5 from './images/courusel5.png'
import {useNavigate} from "react-router-dom";
function Home5() {
    const nav = useNavigate();
    function next(e){
        e.preventDefault();
        nav("/6");
    };
  return (
          <div className={cl.container}>
              <img className={cl.back1} src={slider5} alt="Image is here" />
              <div className={cl.back__text}>Просмотр каталога квартир ЖК</div>
              <img  className={cl.coursl} src={courusel5} alt="Image is here" />
              <button className={cl.myButton}  onClick={next}>
                  Далее
              </button>
          </div>

  );
}

export default Home5;
