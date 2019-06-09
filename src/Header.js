import React, { Fragment } from 'react';
import styles from './css/header.min.css'
import line from './img/login_line.png';
import logo from './img/logo.png';

export default function Header() {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.content}>

          <div className={styles.topContainer}>
            <div className={styles.topContainer__left}>
              <ul>
                <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                <li><a href=""><i className="fab fa-twitter"></i></a></li>
                <li><a href=""><i className="fab fa-instagram"></i></a></li>
                <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href=""><i className="fab fa-tumblr"></i></a></li>
              </ul>
            </div>
            <div className={styles.topContainer__right}>
              <div className={styles.topContainer__right__address}>
                <i className="fas fa-map-marker-alt"></i>
                <span>1835 73rd Ave NE, Medina, Washington, USA</span>
              </div>
              <div className={styles.topContainer__right__login}>
                <a href="#">LOGIN</a>
                <img src={line} alt="line"/>
                <a href="#">REGISTER</a>
              </div>
            </div>
          </div>

          <div className={styles.logoLine}>
            <div>
              <img src={logo} alt="Logo"/>
            </div>
            <div className={styles.logoLine__menu}>
              <ul>
                <li>
                  <a href="">HOME</a>
                </li>
                <li>
                  <a href="">TOURS</a>
                </li>
                <li>
                  <a href="">PACKAGE</a>
                </li>
                <li>
                  <a href="">BLOG</a>
                </li>
                <li>
                  <a href="">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.middle__text}>
              <p className={styles.middle__text__text1}>+91 254 587 485</p>
              <p className={styles.middle__text__text2}>Book a Ticket & Just Leave</p>
              <p className={styles.middle__text__text3}>Travel is the movement of people between relatively distant geographical locations,<br/> and can involve travel by foot, bicycle, automobile, train, boat, bus</p>
            </div>
          </div>

          <div className={styles.middle__button}>
            <a href="" className={styles.middle__button}>
              <i className="fas fa-long-arrow-alt-right"></i>
              <span>GET TICKET</span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
