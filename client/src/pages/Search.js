import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      .get("https://api.bryta.shop/actor/search", {
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
          <div className="search-message">
            배우
            <span className="search-result"> '{searchActor.actorName}' </span>
            을(를) 검색하였습니다.
          </div>
          <Link to={`detail/${searchActor.id}`}>
            <div className="searchActor">
              <img
                src={searchActor.actorImage}
                alt={searchActor.actorName}
                className="search-actorImage"
              />
              <div className="search-actorName">{searchActor.actorName}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Search;
