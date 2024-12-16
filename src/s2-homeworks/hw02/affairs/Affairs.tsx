import React from 'react';
import Affair from './affair/Affair';
import { AffairType, FilterType } from '../HW2';
import s from './Affairs.module.css';

// Типизация пропсов
type AffairsPropsType = {
    data: AffairType[];
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
    filter: FilterType;
};

const Affairs: React.FC<AffairsPropsType> = (props) => {
    // Функции для установки фильтров
    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    // Определение классов для кнопок
    const cnAll = `${s.button} ${s.all} ${props.filter === 'all' ? s.active : ''}`;
    const cnHigh = `${s.button} ${s.high} ${props.filter === 'high' ? s.active : ''}`;
    const cnMiddle = `${s.button} ${s.middle} ${props.filter === 'middle' ? s.active : ''}`;
    const cnLow = `${s.button} ${s.low} ${props.filter === 'low' ? s.active : ''}`;

    // Отображение дел
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // указывать уникальные ключи
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    return (
        <div>
            <div className={s.buttonContainer}>
                <button id="hw2-button-all" onClick={setAll} className={cnAll}>
                    All
                </button>
                <button id="hw2-button-high" onClick={setHigh} className={cnHigh}>
                    High
                </button>
                <button id="hw2-button-middle" onClick={setMiddle} className={cnMiddle}>
                    Middle
                </button>
                <button id="hw2-button-low" onClick={setLow} className={cnLow}>
                    Low
                </button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    );
};

export default Affairs;

