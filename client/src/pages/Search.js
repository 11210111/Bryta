import React, { useState, useEffect } from "react";
import Actor from "../components/Actor";

import { useLocation, useHistory } from "react-router";
import axios from "axios";
import "../css/Search.css";

function Search() {
  const location = useLocation();
  const history = useHistory();
  const value = location.state.value.searchInput;
  const [searchActor, setSearchActor] = useState([]);
  useEffect(() => {
    result();
  }, [value]);
  const result = () => {
    axios
      .get("http://localhost:8080/actor/search", {
        params: { actorName: value },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        setSearchActor(res.data.payload);
      })
      .catch((err) => history.push("/searcherror"));
  };
  return (
    <div className="search_Container">
      <div className="search_In">
        <div className="searchActor_container">
          <div className="searchActor">
            <Actor actor={searchActor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
