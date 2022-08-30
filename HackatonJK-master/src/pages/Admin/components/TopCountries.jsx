import React from "react";
import {Icon} from "./Icon";
import {Image} from "./Image";

const Countrydata = [
    { name: 'Магнит', rise: true, value: 21942.83, id: 1, img: 'https://adindex.ru/files2/news/2019_02/270104_0.jpg'},
    { name: 'Пятерочка', rise: false, value: 19710.0, id: 2, img: 'https://adindex.ru/files2/news/2019_02/270104_0.jpg' },
    { name: 'Универсам', rise: false, value: 12320.3, id: 3, img: 'https://adindex.ru/files2/news/2019_02/270104_0.jpg' },
    { name: 'Перекресток', rise: true, value: 9725.0, id: 4, img: 'https://adindex.ru/files2/news/2019_02/270104_0.jpg' },
];

export function TopCountries() {
    return (
        <div className="flex p-4 flex-col h-full">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold">Топ магазины</div>
                <Icon path="res-react-dash-plus" className="w-5 h-5" />
            </div>
            <div className="">Избранное</div>
            {Countrydata.map(({ name, rise, value, id, img }) => (
                <div className="flex items-center mt-3" key={id}>
                    <div className="">{id}</div>

                    <Image path={img} className="ml-2 w-6 h-6" />
                    <div className="ml-2">{name}</div>
                    <div className="flex-grow" />
                    <div className="">{`₽${value.toLocaleString()}`}</div>
                    <Icon
                        path={
                            rise ? 'res-react-dash-country-up' : 'res-react-dash-country-down'
                        }
                        className="w-4 h-4 mx-3"
                    />
                    <Icon path="res-react-dash-options" className="w-2 h-2" />
                </div>
            ))}
            <div className="flex-grow" />
            <div className="flex justify-center">
                <div className="">Посмотреть все</div>
            </div>
        </div>
    );
}