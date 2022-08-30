import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider2 from './images/slider2.png'
import courusel2 from './images/courusel2.png'
import {useNavigate} from "react-router-dom";
function Home2() {
    const nav = useNavigate();
    function next(e){
        e.preventDefault();
        nav("/3");
    };
  return (
          <div className={cl.container}>
              <div className={cl.back__text}>В нашей экосистеме:</div>
              <img className={cl.back1} src={slider2} alt="Image is here" />
              <div className={cl.back__text}>Сервис подбора квартир</div>
              <img className={cl.coursl} src={courusel2} alt="Image is here" />
              <button className={cl.myButton}  onClick={next}>
                  Далее
              </button>
          </div>

  );
}

export default Home2;
