import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="container">
        <section id="contacts" className="contacts">
          <h2 className="contacts-title title">Наші Контакти</h2>
          <address className="contacts-address">
            <ul className="contacts-list list">
              <li className="contacts-item">
                <a
                  href="https://goo.gl/maps/tJ6gX38e55JNDVaZ8"
                  target="_blank"
                  className="contacts-link link"
                  rel="noopener nofollow noreferrer"
                >
                  вул. Васильківска, 7А Київ, 08132
                </a>
              </li>
              <li className="contacts-item">
                <a href="tel:+380441111111" className="contacts-link link">
                  +38 044 111 11 11
                </a>
              </li>
              <li className="contacts-item">
                <a href="mailto:barbershop@email.com" className="contacts-link">
                  barbershop@email.com
                </a>
              </li>
            </ul>
          </address>
          <p className="contacts-subtitle">час роботи</p>
          <p className="contacts-time">Щоденно з 9:00 по 22:00</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
