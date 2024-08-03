import React, { useContext, useEffect } from "react";
import "./Details.css";
import { DataContext } from "../../Cont";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movies } = useContext(DataContext);

  const { id } = useParams();

  const data = movies.filter((items) => {
    if (id == items.id) {
      console.log(items);
      return items;
    }
  });
  const details = data[0];

  return (
    <>
      <div className="maincont">
        <div className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
          <div>
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
            <a href="#">My account</a>
          </div>
        </div>

        <div className="containerd">
          <div className="movie-title">{details?.title}</div>
          <div className="movie-info">
            <p>
              <strong>Release Date:</strong>
            </p>
            <p>
              <strong>Original Title:</strong> {details?.title}
            </p>
            <p>
              <strong>Original Language:</strong> {details?.original_language}
            </p>
            <p>
              <strong>Genres:</strong> Family, Adventure, Comedy, Drama
            </p>
            <p>
              <strong>Popularity:</strong> {details?.popularity}
            </p>
            <p>
              <strong>Vote Average:</strong> 7.713
            </p>
            <p>
              <strong>Vote Count:</strong> 1514
            </p>
          </div>
          <div className="movie-description">
            <p>
              <strong>Overview:</strong>
            </p>
            <p>
              Teenager Riley's mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.
            </p>
          </div>
          <img
            className="movie-poster"
            src={"https://image.tmdb.org/t/p/w500/" + details?.poster_path}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Details;
