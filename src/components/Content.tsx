import React from "react";
import { MovieProps } from "../definitions";
import "../styles/content.scss";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  categoryTitle: string;
  movies: MovieProps[];
}

export const Content: React.FC<ContentProps> = ({ categoryTitle, movies }) => {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {categoryTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
