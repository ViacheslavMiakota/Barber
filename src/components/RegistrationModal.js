import React, { useState } from "react";
import axios from "axios";

const RegistrationModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Паролі не співпадають. Будь ласка, перевірте ще раз.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3100/auth/register", formData);
      console.log("Реєстрація успішна", response.data);
      setErrorMessage("");
      onSuccess(formData.username);
      handleClose(); // Закрити модальне вікно після успішної реєстрації
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Встановлюємо повідомлення про помилку, якщо є відповідь від сервера
      } else {
        setErrorMessage("Виникла помилка реєстрації. Спробуйте знову."); // Загальне повідомлення, якщо відповідь від сервера відсутня
      }
      console.error("Помилка реєстрації:", error);
    }
  };
  const handleClose = () => {
    setFormData({
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    onClose(); // Закриваємо модальне вікно
  };
  if (!isOpen) return null;

  return (
    <div className="backdrop">
      <div className="modal">
        <button type="button" className="close-btn" onClick={onClose}>
          <svg className="icon-close">
            <use href="/assets/images/symbol-defs.svg#icon-close_40px"></use>
          </svg>
        </button>
        <section className="online">
          <h2 className="online-title title">Реєстрація</h2>
          <form className="online-form" onSubmit={handleSubmit}>
            {errorMessage && (
              <div
                className="error-message"
                style={{ color: "red", marginBottom: "10px" }}
              >
                {errorMessage}
              </div>
            )}
            <div className="input-field">
              <input
                type="text"
                className="online-input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="online-name" className="online-label">
                Ім'я*
              </label>
            </div>
            <div className="input-field">
              <input
                type="email"
                className="online-input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="online-tel" className="online-label">
                Ваша електронна пошта*
              </label>
            </div>

            <div className="input-field">
              <input
                type="password"
                className="online-input"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="password" className="online-label">
                Пароль
              </label>
            </div>
            <div className="input-field">
              <input
                type="password"
                className="online-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="confirmPassword" className="online-label">
                Підтвердити пароль
              </label>
            </div>
            <div className="input-field">
              <input
                type="tel"
                className="online-input"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="online-tel" className="online-label">
                Ваш телефон*
              </label>
            </div>
            <button type="submit" className="online-btn btn" data-submit-form>
              Зареєструватися
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default RegistrationModal;
