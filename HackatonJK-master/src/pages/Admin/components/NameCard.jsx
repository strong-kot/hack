import {animated, useSpring} from "react-spring";
import React from "react";
import {Icon} from "./Icon";
import {Image} from "./Image";
import {clsx} from "clsx";

export function NameCard({
                      name,
                      position,
                      transactionAmount,
                      rise,
                      tasksCompleted,
                      imgId,
                  }) {
    const { transactions, barPlayhead } = useSpring({
        transactions: transactionAmount,
        barPlayhead: 1,
        from: { transactions: 0, barPlayhead: 0 },
    });
    return (
        <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card flex justify-between p-3 h-32">
                <div className="">
                    <div className="flex items-center">
                        <Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
                        <div className="ml-2">
                            <div className="flex items-center">
                                <div className="mr-2 font-bold text-white">{name}</div>
                                <Icon path="res-react-dash-tick" />
                            </div>
                            <div className="text-sm ">{position}</div>
                        </div>
                    </div>

                    <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>

                </div>
                <div className="flex flex-col items-center">
                    <Icon
                        path={rise ? 'res-react-dash-bull' : 'res-react-dash-bear'}
                        className="w-8 h-8"
                    />
                    <animated.div
                        className={clsx(
                            rise ? 'text-green-500' : 'text-red-500',
                            'font-bold',
                            'text-lg',
                        )}
                    >
                        {transactions.interpolate((i) => `$${i.toFixed(2)}`)}
                    </animated.div>
                    <div className="text-sm ">Последние 6 месяцев</div>
                </div>
            </div>
        </div>
    );
}