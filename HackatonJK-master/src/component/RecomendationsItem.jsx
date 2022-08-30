import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import imag from "./1.jpg";
import {Carousel} from "react-bootstrap";
const RecomendationsItem = (props) => {
    const router = useNavigate();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="products">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item >
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="First slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="Second slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="products_image">
                        <picture>
                            <img
                                className="d-block w-100"
                                src={imag}
                                alt="Third slide"
                            />
                        </picture>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="description">
                <div className="name_flat"><h3>{props.post.rooms_number}-комн. кв., {props.post.total_area} м², {props.post.floor} этаж</h3></div>
                <div className="address"><span>{props.post.address}</span></div>
                <div className="cost_flat"><h3>1 000 000 рублей</h3></div>
                <div><button className="jk_info_but" onClick={()=>router(`/recomendation/${props.post.residential_complex}`)}>ЖК {props.post.residential_complex}</button></div>
                <div className="all_description">
                    <span>Фото соответствуют, собственник!
                    Новый элитный дом в историческом центре города, Вся транспортная развязка в любом направлении.
                    Площадь квартиры составляет 55 кв. м, большая прихожая, балкон,
                    вид из окна красивый, нет шума. Ремонт новый, современная отделка, </span>
                </div>

            </div>
        </div>

    );
};

export default RecomendationsItem;
