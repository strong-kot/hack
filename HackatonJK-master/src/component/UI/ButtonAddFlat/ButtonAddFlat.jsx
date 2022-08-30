import React from 'react';
import cl from './ButtonAddFlat.module.css'
import {Container} from "react-bootstrap";
import plus from './plus.svg'
import {useNavigate} from "react-router-dom";
const ButtonAddFlat = () => {
    const nav = useNavigate();
    function open(e){
        e.preventDefault();
        nav("/recomendation");
    };
    return (
        <Container>
            <div className={cl.background_button} onClick={open}>
               <div className={cl.plus_image}><img alt="plus" src={plus} /></div>
                <div className={cl.button_text}>Подобрать квартиру</div>
            </div>
        </Container>

    );
};

export default ButtonAddFlat;