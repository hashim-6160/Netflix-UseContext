import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "./Mvcard.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Cont";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Mvcard = ({ searchQuery }) => {
  const navigate = useNavigate();
  const [movie, setMovies] = useState([]);

  const handleCardClick = (id) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate(`/detail/${id}`);
      } else {
        console.log("loggedOut");
        navigate("/");
      }
    });
  };

  const { movies } = useContext(DataContext);
  console.log(movies);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="content">
        <div className="section">
          {filteredMovies.map((movie) => (
            <div
              className="row"
              key={movie.id}
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
                alt={movie.title}
              />
              <li>{movie.title}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mvcard;
