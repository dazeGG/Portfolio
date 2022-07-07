import React from "react";
import { Link } from "react-router-dom";
import style from "./ProjectCard.module.scss";

const ProjectCard = (props) => {
  const isOpenSource = props.isOpenSource ? (
    <span className={style.yes}>Open Source</span>
  ) : (
    <span className={style.no}>Not Open Source</span>
  );
  return (
    <Link to={props.link} className={style.project__card}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.is__open__source}>{isOpenSource}</div>
      <div className={style.stack}>
        <h4>Stack</h4>
        <div className={style.stack__content}>
          {props.stack.map((stackItem) => (
            <div
              key={stackItem}
              className={
                style[stackItem.toLowerCase().replace(/[^a-zа-я]+/g, "")]
              }
            >
              {stackItem}
            </div>
          ))}
        </div>
      </div>
      <div className={style.what_is_it}>{props.whatIsIt}</div>
    </Link>
  );
};

export default ProjectCard;
