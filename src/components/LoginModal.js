import React, { useState } from "react";
import axios from "axios";

const LoginModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const { token, name, phoneNumber } = response.data;
      console.log("Логінізація успішна", response.data);
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("phoneNumber", phoneNumber);

      setErrorMessage("");
      onSuccess();
      onClose();
      setFormData({
        message: "",
        selectedBarber: "",
      });
    } catch (error) {
      setErrorMessage("Невірний логін або пароль. Спробуйте знову.");
      console.error("Невірний Логін:", error);
    }
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
          <h2 className="online-title title">Вхід до барбершопу</h2>
          <form className="online-form" onSubmit={handleLogin}>
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
                type="email"
                className="online-input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="email" className="online-label">
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
            <button type="submit" className="online-btn btn" data-submit-form>
              Увійти
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
