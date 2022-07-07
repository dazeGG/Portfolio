import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      made by{" "}
      <a href="https://github.com/dazeGG" target="_blank" rel="noreferrer">
        daze
      </a>
    </footer>
  );
};

export default Footer;
