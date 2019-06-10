import React from 'react';
import styles from './css/footer.min.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles.contacts__logo}></div>
          <div className={styles.contacts__text}>
            <p>Phone: +91 254 541 254</p>
            <p>Fax: +44 161 999 8888</p>
            <p>Email: dreamland@dream.com</p>
          </div>
        </div>
        <div className={styles.menuItem}>
          <p className={styles.menuItem__headline}>Support</p><hr className={styles.menuItem__line}/>
          <ul>
            <li>Email Contact</li>
            <li>Help Center</li>
            <li>Live Chat</li>
            <li>Our Community</li>
            <li>Services Status</li>
          </ul>
        </div>
        <div className={styles.menuItem}>
          <p className={styles.menuItem__headline}>Location</p><hr className={styles.menuItem__line}/>
          <ul>
            <li>London</li>
            <li>Canada</li>
            <li>America</li>
            <li>India</li>
            <li>Australia</li>
          </ul>
        </div>
        <div className={styles.menuItem}>
          <p className={styles.menuItem__headline}>Menu</p><hr className={styles.menuItem__line}/>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Tours</li>
            <li>Packages</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
