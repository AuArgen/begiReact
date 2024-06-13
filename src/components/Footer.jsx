import { useState } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__item">
          <div className="footer__item--logo">
            <img src="\svg\Footer__logo.svg" alt="" />
          </div>
          <div className="footer__item--content">
            <ul>
              <li> Кыргызстан, 723500,</li>
              <li>Ош, ул. Ленина, 331</li>
              <li>+996 505 55 55 55</li>
              <li>edu@oshsu.kg</li>
            </ul>
            <ul>
              <li>Имаралиев Өмүрбек Р.</li>
              <li>
                 Кандидат экономических наук, доцент
              </li>
              <li>
                Back end <a href="tel:+996773646699">+996 773 64 66 99</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Кыргызстан, 723500, г. Ош, ул. Ленина, 331, ОшГУ Главный корпус Общий
          отдел: +996 3222 7-22-73, факс +996 3222 7-09-15, edu@oshsu.kg
        </p>
      </div>
    </footer>
  );
};

export default Footer;
