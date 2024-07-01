import {FunctionComponent} from "react";
// @ts-ignore
import style from "./style.module.scss";


const Header: FunctionComponent = () => {
  return (
    <section className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__wrapper}>
          <h1>Info</h1>
          <div className={style.header__info}>
            <li className={style['header__info-item']}>Всего задач: 27</li>
            <li className={style['header__info-item']}>Активных: 12</li>
            <li className={style['header__info-item']}>Невыполненных: 2</li>
            <li className={style['header__info-item']}>Выполненных: 7</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
