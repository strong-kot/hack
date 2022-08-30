import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import imag from './1.jpg'
const PostItem = (props) => {
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
                <div className="cost_flat"><h3>Тип апартаментов: {props.post.apartment_type}</h3></div>
                <div className="status_flat"><span>Статус: {props.post.status}</span></div>
                <div><button className="jk_info_but">ЖК {props.post.residential_complex}</button></div>
            </div>
        </div>
        /*<div className="products">
            <div className="product">
                <picture>
                    <img src="https://images.unsplash.com/photo-1656316385620-b8be53335afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80" alt="Image is here" />
                </picture>
                <span className="price">{props.post.name}</span>
                <h3>{props.post.shop.name}</h3>
            </div>
        </div>*/

    );
};

export default PostItem;
