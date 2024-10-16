import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <ul className="about-list list">
          <li className="about-item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/images/img-1.jpg"
                min-width="330"
                type="image/jpeg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/images/img1-tab.jpg"
                type="image/jpeg"
              />
              <img
                src="/assets/images/img-1.jpg"
                alt="Барбер стриже"
                width="270"
                height="445"
              />
            </picture>
          </li>
          <li className="about-item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/images/img-2.jpg"
                type="image/jpeg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/images/img2-tab.jpg"
                type="image/jpeg"
              />
              <img
                src="/assets/images/img-2.jpg"
                alt="Барбер бриє шию"
                width="270"
                height="445"
              />
            </picture>
          </li>
        </ul>
        <div className="about-content">
          <p className="about-top-text">ПРО НАС</p>
          <h2 className="about-name">Найкращий Барбершоп твого міста</h2>
          <p className="about-botton-text">
            Якщо ти хочеш додати до свого образу більше впевненості - тобі однозначно до
            нас.
          </p>
          <p className="about-text">
            Ми команда, котра ніколи не зупиняється на досягнутому та прагне змін. Коли ти
            потрапиш до рук нашого майстра , вже ніколи не зможеш бути колишнім. Ми
            команда, котра завжди з клієнтами "на одній хвилі". Тому, ми завжди готові
            вдосконалюти кожного , хто приходить до нас!
          </p>
          <button type="button" className="about-btn btn" data-modal-open>
            онлайн-запис
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
