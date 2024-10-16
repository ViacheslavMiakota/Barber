import React from "react";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <p className="work-top-name">Латинською мовою “барба” означає “борода”</p>
        <h2 className="work-name visually-hidden">Наші роботи</h2>
        <ul className="work-list list">
          <li className="work-item">
            <img
              src="/assets/images/Rectangle-25.jpg"
              alt="Стриже"
              width="270"
              height="360"
            />
          </li>
          <li className="work-item">
            <img
              src="/assets/images/Rectangle-26.jpg"
              alt="Бриє"
              width="270"
              height="360"
            />
          </li>
          <li className="work-item">
            <img
              src="/assets/images/Rectangle-27.jpg"
              alt="Депілює"
              width="270"
              height="360"
            />
          </li>
          <li className="work-item">
            <img
              src="/assets/images/Rectangle-28.jpg"
              alt="Наводить кант"
              width="270"
              height="360"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
