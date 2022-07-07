import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Home.module.scss";

const Home = () => {
  document.title = "daze | Home";
  return (
    <div className={style.content}>
      <p>Этот сайт был разработан для показа моих работ и информации о себе.</p>
      <p>
        Мои проекты можно посмотреть <Link to="/projects">тут</Link>
      </p>
      <p>
        Информацию обо мне и этом сайте <Link to="/about">тут</Link>
      </p>
      <p>
        Кастомную страницу 404 <Link to="/404">тут</Link>
      </p>
    </div>
  );
};

export default Home;
