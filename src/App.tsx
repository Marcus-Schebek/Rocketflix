import './assets/styles/global.scss'
import React, { useState } from 'react';
import Title from './assets/components/Title/index';
import Button from './assets/components/Button';
import Footer from './assets/components/Footer';
import Movie from './assets/components/Movie';
import { getRandomMovie } from './assets/service/getFilm';

const App: React.FC = () => {
  const [movie, setMovie] = useState<{ title: string, description: string, image: string }>({
    title: '',
    description: '',
    image: '',
  });

  async function handleGetRandomMovie() {
    const result = await getRandomMovie();
    setMovie({
      title: result.title,
      description: result.overview,
      image: result.img,
    });
  }

  return (
    <div className="App">
      <Title />
      {movie.title && <Movie title={movie.title} description={movie.description} image={movie.image} />}
      <Button onClick={handleGetRandomMovie} />
      <Footer />
    </div>
  )
}

export default App;