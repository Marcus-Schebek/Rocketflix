export async function getRandomMovie() {
  const id = Math.floor(Math.random()*956) + 1
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const movie = {
    title: data.original_title,
    overview: data.overview,
    img: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
  }
  return movie
}
