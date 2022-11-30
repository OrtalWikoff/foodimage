import React from 'react'
import style from "./recipe.module.css"

const Recipe = ({title, image, sourceUrl}) => {
  return (
    <div  className={style.recipe}>
        <h3>{title}</h3>
        <img src={image} alt=''/>
        <br/>
    </div>
  );
}

export default Recipe

