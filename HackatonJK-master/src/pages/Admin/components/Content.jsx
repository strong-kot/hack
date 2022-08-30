import React from "react";
import {Icon} from "./Icon";
import {Graph} from "./Graph";
import {TopCountries} from "./TopCountries";
import {Segmentation} from "./Segmentation";
import {Satisfication} from "./Satisfication";
import {AddComponent} from "./AddComponent";
import {Card} from "./Card";
import useAuth from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";


const employeeData = [
    {
        text: 'Транзакции',
        givenYearData: '215 700 632',
        lastYearData: '210,5 млн',
        profit: 2.5,
        type: 'rubles'
    },
    {
        text: 'Комиссия',
        givenYearData: '15 099 044',
        lastYearData: '15,02 млн',
        profit: -0.2,
        type: 'rubles'
    },
    {
        text: 'Новые клиенты',
        givenYearData: '1 142 350',
        lastYearData: '285587',
        profit: 75,
        type: 'hour'
    },
];

export function Content() {
    const auth = useAuth();
    const nav = useNavigate();

    function onLogOut(e){
        e.preventDefault();
        auth.logOut();
        nav("/login");
    };
    return (
        <div className="flex w-full">
            <div className=" h-screen flex-grow flex flex-wrap content-start p-2">
                <div className="w-full sm:flex p-2 items-end">
                    <div className="sm:flex-grow flex justify-between">
                        <div className="">
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-white">Здравствуйте, админ</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
                        <Icon
                            path="res-react-dash-search"
                            className="w-5 h-5 search-icon left-3 absolute"
                        />
                        <form action="#" method="POST">
                            <input
                                type="text"
                                name="company_website"
                                id="company_website"
                                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                                placeholder="Поиск"
                            />
                        </form>

                    </div>
                    <button style={{backgroundColor:'#171717', borderRadius:'10px',padding:'8px 12px', marginLeft:'10px',color:'#b2b7b0'}} onClick={onLogOut}>
                        Выйти
                    </button>
                </div>
                {employeeData.map(
                    (data) => (
                        <Card
                            key={data.text}
                            text={data.text}
                            givenYearData={data.givenYearData}
                            lastYearData={data.lastYearData}
                            profit={data.profit}
                            type={data.type}
                        />
                    ),
                )}

                <div className="w-full p-2 lg:w-2/3">
                    <div className="rounded-lg bg-card sm:h-80 h-60">
                        <Graph />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <TopCountries />
                    </div>
                </div>

                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <Segmentation />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card h-80">
                        <Satisfication />
                    </div>
                </div>
                <div className="w-full p-2 lg:w-1/3">
                    <div className="rounded-lg bg-card overflow-hidden h-80">
                        <AddComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}
