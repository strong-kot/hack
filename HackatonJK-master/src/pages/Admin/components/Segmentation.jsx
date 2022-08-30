import React from "react";
import {Icon} from "./Icon";

const segmentationData = [
    { c1: '25-45 лет', c2: '713 969', c3: '#363636', color: '#535353' },
    { c1: '18-25 лет', c2: '392 682', c3: '#818bb1', color: '#595f77' },
    { c1: '45-60 лет', c2: '207 050', c3: '#2c365d', color: '#232942' },
    { c1: '60+ лет', c2: '114 234', c3: '#334ed8', color: '#2c3051' },
];

export function Segmentation() {
    return (
        <div className="p-4 h-full">
            <div className="flex justify-between items-center">
                <div className="text-white font-bold">Сегментация</div>

                <Icon path="res-react-dash-options" className="w-2 h-2" />
            </div>
            <div className="mt-3">Все пользователи</div>
            {segmentationData.map(({ c1, c2, c3, color }) => (
                <div className="flex items-center" key={c1}>
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            background: color,
                        }}
                    />
                    <div className="ml-2" style={{ color }}>
                        {c1}
                    </div>
                    <div className="flex-grow" />
                    <div className="" style={{ color }}>
                        {c2}
                    </div>
                    <div className="ml-2 w-12 card-stack-border" />
                    <div className="ml-2 h-8">
                        <div
                            className="w-20 h-28 rounded-lg overflow-hidden"
                            style={{
                                background: c3,
                            }}
                        >
                            {c1 === 'Other' && (
                                <img src="https://assets.codepen.io/3685267/res-react-dash-user-card.svg" alt="" />
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex mt-3 px-3 items-center justify-between bg-details rounded-xl w-36 h-12">
                <div className="">Подробности</div>
                <Icon path="res-react-dash-chevron-right" className="w-4 h-4" />
            </div>
        </div>
    );
}