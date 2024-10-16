import React from "react";

const Header = ({
  toggleModal,
  toggleRegistrationModal,
  toggleLoginModal,
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list list">
            <li className="nav__item">
              <a href="#about" className="current nav__link link">
                Про нас
              </a>
            </li>
            <li className="nav__item">
              <a href="#price" className="nav__link link">
                Послуги та ціни
              </a>
            </li>
            <li className="nav__item">
              <a href="#masters" className="nav__link link">
                Майстри
              </a>
            </li>
            <li className="nav__item">
              <a href="#contacts" className="nav__link link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className="connect">
          <a className="nav__tel link" href="tel:+380441111111">
            +38 044 111 11 11
          </a>
          {isLoggedIn ? (
            <div className="box_btn">
              <button
                type="button"
                className="connect__btn btn"
                onClick={toggleModal} // Викликаємо toggleModal для відкриття модального вікна
              >
                Онлайн-запис
              </button>
              <button type="button" className="connect__btn btn" onClick={handleLogout}>
                Вихід
              </button>
            </div>
          ) : (
            <div className="box_btn">
              <button
                type="button"
                className="connect__btn btn"
                onClick={toggleRegistrationModal} // Викликаємо toggleRegistrationModal для відкриття модального вікна реєстрації
              >
                Зареєструватись
              </button>
              <button
                type="button"
                className="connect__btn btn"
                onClick={toggleLoginModal} // Викликаємо функцію для відкриття модального вікна входу
              >
                Вхід
              </button>
            </div>
          )}
        </div>
        <button type="button" className="menu-open-btn">
          <svg className="mob-open-icon" width="40" height="40">
            <use href="/assets/images/symbol-defs.svg#icon-menu_40px"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
