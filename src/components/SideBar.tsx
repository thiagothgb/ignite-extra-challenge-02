import React from "react";
import { GenreResponseProps } from "../definitions";
import "../styles/sidebar.scss";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onSelectGenre(id: number): void;
}

export const SideBar: React.FC<SideBarProps> = ({
  genres,
  selectedGenreId,
  onSelectGenre,
}) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
