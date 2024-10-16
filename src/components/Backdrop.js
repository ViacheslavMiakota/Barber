import React, { useState, useEffect } from "react";
import axios from "axios";

const Bascdrop = ({ isOpen, onClose }) => {
  const [barbers, setBarbers] = useState([]);
  const [formData, setFormData] = useState({
    message: "",
    selectedBarber: "",
    selectedTime: "",
    name: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Токен відсутній");
        }

        const response = await axios.get("http://localhost:3100/user/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data;
        // Використовуємо функцію в setFormData, щоб уникнути залежності на formData
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: userData.name || "",
          phoneNumber: userData.phoneNumber || "",
        }));
      } catch (error) {
        console.error("Помилка завантаження даних користувача:", error);
      }
    };

    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]); // Видаляємо formData з залежностей

  useEffect(() => {
    const fetchBarbers = async () => {
      try {
        const response = await axios.get("http://localhost:3100/barbers");
        setBarbers(response.data);
      } catch (error) {
        console.error("Помилка завантаження даних перукарів:", error);
      }
    };

    fetchBarbers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Форма відправлена, дані:", formData);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:3100/visit", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("Запит успішний!");
      }
      onClose();
      setFormData({
        message: "",
        selectedBarber: "",
        selectedTime: "",
      });
    } catch (error) {
      console.error("Помилка при запису на стрижку", error);
    }
  };

  const { name, phoneNumber } = formData;

  return (
    <div className={`backdrop ${isOpen ? "" : "is-hidden"}`} data-modal>
      <div className="modal">
        <button type="button" className="close-btn" onClick={onClose}>
          <svg className="icon-close">
            <use href="/assets/images/symbol-defs.svg#icon-close_40px"></use>
          </svg>
        </button>
        <section className="online">
          <h2 className="online-title title">Запишись та приходь</h2>
          <form className="online-form" onSubmit={handleSubmit}>
            <div className="input-field mes">
              <p className="online-mes">Чекаємо на вас {name}</p>
            </div>
            <div className="input-field">
              <p className="online-mes">Ваш телефон {phoneNumber}</p>
            </div>
            <div className="text-field">
              <textarea
                name="message"
                value={formData.visitText}
                onChange={handleInputChange}
                id="online-mess"
                className="online-mess"
                placeholder=" "
              ></textarea>
              <label htmlFor="online-mess" className="online-label">
                Побажання до стрижки
              </label>
            </div>
            <div className="input-field">
              <select
                className="online-input"
                name="selectedBarber"
                value={formData.selectedBarber}
                onChange={handleInputChange}
                id="online-barber"
              >
                <option value="">Оберіть перукаря</option>
                {barbers.map((barber) => (
                  <option key={barber._id} value={barber._id}>
                    {barber.name}
                  </option>
                ))}
              </select>
              <label htmlFor="online-barber" className="online-label">
                Оберіть перукаря
              </label>
            </div>
            <div className="input-field">
              <input
                type="datetime-local"
                className="online-input"
                name="selectedTime"
                value={formData.selectedTime}
                onChange={handleInputChange}
                id="online-time"
              ></input>
              <label htmlFor="online-time" className="online-label">
                Оберіть час та дату візиту
              </label>
            </div>
            <button type="submit" className="online-btn btn" data-submit-form>
              відправити
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Bascdrop;
