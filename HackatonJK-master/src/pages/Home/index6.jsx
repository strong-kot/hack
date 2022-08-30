import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider6 from './images/slider6.png'
import courusel6 from './images/courusel6.png'
import {useNavigate} from "react-router-dom";
function Home6() {
    const nav = useNavigate();
    function registration(e){
        e.preventDefault();
        nav("/registration");
    };
    function autorazation(e){
        e.preventDefault();
        nav("/login");
    };
  return (
          <div className={cl.container}>
              <img className={cl.back1} src={slider6} alt="Image is here" />
              <div className={cl.back__text}>Выбор за вами</div>
              <img  className={cl.coursl} src={courusel6} alt="Image is here" />
              <div className={cl.container_button}>
              <button className={cl.buttonLog}  onClick={autorazation}>
                  Вход
              </button>
              <button className={cl.buttonRegistration}  onClick={registration}>
                  Регистрация
              </button>
              </div>
          </div>

  );
}

export default Home6;
