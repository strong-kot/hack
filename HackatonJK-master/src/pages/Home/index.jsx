import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider1 from './images/slider1.png'
import courusel1 from './images/courusel1.png'
import {useNavigate} from "react-router-dom";
function Home() {
    const nav = useNavigate();

    function next(e){
        e.preventDefault();
        nav("/2");
    };
  return (
          <div className={cl.container}>
              <img className={cl.back1} src={slider1} alt="Image is here" />
              <div className={cl.back__text}>Добро пожаловать в <span style={{color: '#3B9B66'}}>Vivaldi Reality</span>!</div>
              <img className={cl.coursl} src={courusel1} alt="Image is here" />

              <button className={cl.myButton}  onClick={next}>
                  Далее
              </button>
          </div>

  );
}

export default Home;
