import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Bascdrop from "./Backdrop";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleRegistrationSuccess = (username) => {
    setSuccessMessage(`Користувача ${username} успішно зареєстровано!`);
    setIsRegistrationModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Встановлюємо стан авторизації
    setSuccessMessage(""); // Очищаємо повідомлення про реєстрацію
    setIsLoginModalOpen(false);
    setIsModalOpen(false); // Закриваємо будь-які інші відкриті модальні вікна
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Очищаємо стан авторизації
    // localStorage.removeItem('token');
    window.location.reload(); // Перезавантажуємо сторінку після виходу
  };

  const toggleRegistrationModal = () => {
    setIsRegistrationModalOpen(!isRegistrationModalOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <div className="main-container">
      <div className="soc">
        <a className="logo header__logo animate__animated animate__bounce" href="#about">
          <svg className="logo__icon" width="66" height="55">
            <use href="/assets/images/symbol-defs.svg#icon-logo"></use>
          </svg>
        </a>
        <ul className="soc__list list">
          <li className="soc__item">
            <a
              href="#masters"
              className="soc__link link"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Instagram
            </a>
          </li>
          <li className="soc__item">
            <a
              href="https://www.youtube.com/"
              className="soc__link link"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <Header
          toggleModal={toggleModal}
          toggleRegistrationModal={toggleRegistrationModal}
          toggleLoginModal={toggleLoginModal}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        {successMessage && <div className="success-message">{successMessage}</div>}
        <HeroSection />
        <Bascdrop isOpen={isModalOpen} onClose={toggleModal} />
        <RegistrationModal
          isOpen={isRegistrationModalOpen}
          onClose={toggleRegistrationModal}
          onSuccess={handleRegistrationSuccess}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={toggleLoginModal}
          onSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
};

export default MainPage;
