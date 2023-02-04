import './style.scss'
import React from 'react';
import chooseImg from "../../img/shuffle.svg";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <div className='Button'>
      <button onClick={props.onClick}>
          <img src={chooseImg}/>
          <span>Find Movies</span>
      </button>
    </div>
  )
}

