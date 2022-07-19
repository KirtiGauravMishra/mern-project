import React, { useState, useEffect } from "react";
import "./Components.css";
import axios from "axios";
import Apicall from "./Apicall";

function Searchbar() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  


  return (
    <div className="App">
      <h3>Search Games</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      
      
    </div>
  );
}

export default Searchbar;