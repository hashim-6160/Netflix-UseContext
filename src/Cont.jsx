import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjJiNmJjYmVlOTIxZDUxZGE2MWYwMjBjYmMxOWQ4OSIsIm5iZiI6MTcyMDQ5NzM2NC43ODQ0MjIsInN1YiI6IjY2OGNiMjI5MjgxYjgyOWU4MDBkMTRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ik4RuKlo67qXOpOX7aTGrLw0Md0kNMnpOHe787ePfJI",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ movies }}>{children}</DataContext.Provider>
  );
};
