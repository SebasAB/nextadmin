import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SebasAB</div>
      <div className={styles.text}>© 2021 SebasAB. All rights reserved</div>
    </div>
  );
};

export default Footer;
