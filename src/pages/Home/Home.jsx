import React, { useState } from "react";
import "./Home.css";
import Mvcard from "../Mvcard/Mvcard";
import Footer from "../Footer/Footer";
import { logout } from "../../firebase";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="maincont">
      <div className="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">My account</a>
          <a href="" onClick={logout}>
            logout
          </a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="hero">
        <h1>Welcome to Netflix</h1>
        <p>Watch your favorite shows and movies</p>
      </div>
      <div className="content">
        <h2>Trending now</h2>
        <div className="section">
          <Mvcard searchQuery={searchQuery} />
        </div>

        <h2>Popular on Netflix</h2>
        <div className="section">
          <Mvcard searchQuery={searchQuery} />
        </div>

        <h2>New Releases</h2>
        <div className="section">
          <Mvcard searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
