import React from "react";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container benefits-box">
        <ul className="benefits-list list">
          <li className="benefits-item">
            <span className="benefits-count">600</span>
            <p className="benefits-text">Задоволений клієнтів у день</p>
          </li>
          <li className="benefits-item">
            <span className="benefits-count">50</span>
            <p className="benefits-text">Нагород за зразковий сервіс</p>
          </li>
          <li className="benefits-item">
            <span className="benefits-count">20</span>
            <p className="benefits-text">Кращих майстрів Києва</p>
          </li>
          <li className="benefits-item">
            <span className="benefits-count">100</span>
            <p className="benefits-text">Подарунків постійним клієнтам</p>
          </li>
        </ul>
        <div className="benefits-about">
          <p className="benefits-top-name">Стара традиційна школа</p>
          <h2 className="benefits-name">Чому приходять саме до нас ?</h2>
          <p className="benefits-botton-name">
            Ми маємо багато позитивних відгуків. Але краще один раз побачити і відчути ,
            ніж 10 разів прочитати.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
