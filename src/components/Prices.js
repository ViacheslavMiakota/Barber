import React from "react";

const Prices = () => {
  return (
    <section id="priсe" className="priсes">
      <div className="container">
        <p className="price-top-text">Проведи час в компанії кращих майстрів</p>
        <h2 className="price-name">Послуги та ціни</h2>
        <div className="price-wrap">
          <ul className="price-list price-list-light list">
            <li className="price-item">
              <p className="price-item-text">Чоловіча стрижка</p>
              <p className="price-item-text">від 300 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Стрижка бороди</p>
              <p className="price-item-text">від 300 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Стрижка вусів</p>
              <p className="price-item-text">від 200 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Бриття небезпечним лезом</p>
              <p className="price-item-text">від 200 грн.</p>
            </li>
          </ul>
          <ul className="price-list price-list-dark list">
            <li className="price-item">
              <p className="price-item-text">Cтрижка у стажера</p>
              <p className="price-item-text">від 50 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Стрижка під насадку</p>
              <p className="price-item-text">від 200 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Дитяча стрижка (до 12 років)</p>
              <p className="price-item-text">від 300 грн.</p>
            </li>
            <li className="price-item">
              <p className="price-item-text">Камуфлювання сивини</p>
              <p className="price-item-text">від 200 грн.</p>
            </li>
          </ul>
        </div>
        <button type="button" className="price-btn btn" data-modal-open>
          онлайн-запис
        </button>
      </div>
    </section>
  );
};

export default Prices;
