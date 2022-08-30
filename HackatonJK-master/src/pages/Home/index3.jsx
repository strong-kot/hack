import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cl from './home.module.css'
import slider3 from './images/slider3.png'
import courusel3 from './images/courusel3.png'
import {useNavigate} from "react-router-dom";
function Home3() {
    const nav = useNavigate();
    function next(e){
        e.preventDefault();
        nav("/4");
    };
  return (
          <div className={cl.container}>
              <img className={cl.back1} src={slider3} alt="Image is here" />
              <div className={cl.back__text}>Программы скидок и лояльностей</div>
              <img  className={cl.coursl} src={courusel3} alt="Image is here" />
              <button className={cl.myButton}  onClick={next}>
                  Далее
              </button>
          </div>

  );
}

export default Home3;
