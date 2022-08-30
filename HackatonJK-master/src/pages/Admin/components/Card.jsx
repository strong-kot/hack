import React from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

const Card = ({text, givenYearData, lastYearData, profit, type}) => {
    return (
        <div className="w-full p-2 lg:w-1/3 hover:border-b-blue-700">
            <div className="rounded-lg bg-card p-3 h-32">
                <div className="pb-3">
                    {text}
                </div>
                <div>
                    <span className='font-bold text-lg pt-3 pr-1.5 blue'>
                        {type === 'rubles' ? `₽${givenYearData}` : `${givenYearData} ч.`}
                    </span>
                    <span className={profit > 0 ? 'green' : 'red'}>
                        {
                            `${profit}%`
                        }
                        {
                            profit > 0
                                ?
                                <AiOutlineArrowUp
                                    style={{display: 'inline-block'}}
                                    className='mb-1'
                                />
                                :
                                <AiOutlineArrowDown
                                    style={{display: 'inline-block'}}
                                    className='mb-1'
                                />
                        }
                    </span>
                </div>
                <div>
                    По сравнению с прошлым годом ({type === 'rubles' ? `₽${lastYearData}` : lastYearData})
                </div>
            </div>
        </div>
    );
};

export {Card}