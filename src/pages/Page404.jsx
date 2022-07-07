import React from "react";
import style from "./styles/Page404.module.scss";

const Page404 = () => {
  document.title = "daze | Page Not Found";

  return (
    <div className="wrapper">
      <div className={style.content}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </div>
  );
};

export default Page404;
