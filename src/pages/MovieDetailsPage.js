import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GalleryItem from '../components/GalleryItem/GalleryItem';
import moviesApi from '../services/api-service';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return <GalleryItem movie={movie} />;
}
