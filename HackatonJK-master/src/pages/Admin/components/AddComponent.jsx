import React from "react";
import {Icon} from "./Icon";

export function AddComponent() {
    return (
        <div>
            <div className="w-full h-20 add-component-head" />
            <div
                className="flex flex-col items-center"
                style={{
                    transform: 'translate(0, -40px)',
                }}
            >
                <div
                    className=""
                    style={{
                        background: '#414455',
                        width: '80px',
                        height: '80px',
                        borderRadius: '999px',
                    }}
                >
                    <img
                        src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div className="text-white font-bold mt-3">
                    Инструменты еще не созданы
                </div>
                <div className="mt-1">Просто создайте свой первый инструмент</div>
                <div className="mt-1">Просто нажмите на кнопку</div>
                <div
                    className="flex items-center p-3 mt-3"
                    style={{
                        background: '#2f49d1',
                        borderRadius: '15px',
                        padding: '8px 16px',
                        justifyContent: 'center',
                        color: 'white',
                    }}
                >
                    <Icon path="res-react-dash-add-component" className="w-5 h-5" />
                    <div className="ml-2">Добавить инструмент</div>
                </div>
            </div>
        </div>
    );
}