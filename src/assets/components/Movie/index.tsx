import React from 'react';
import './style.scss'

interface Props {
    title: string,
    description: string,
    image: string
}

const Movie: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className='Movie'>
      <img src={image}/>
      <div className="MovieDescription">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Movie;
