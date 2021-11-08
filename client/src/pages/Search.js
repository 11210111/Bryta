import React, { useState } from "react";
import Actor from "../components/Actor";
import "../css/Search.css";

function Search({ setSelectedActor, isLoading, setIsLoading, actor }) {
  const [searchValue, setSearchValue] = useState("");
  const [allActor] = useState(actor);
  const [searchActor, setSearchActor] = useState(actor);
  const [moreActor, setMoreActor] = useState(actor);

  //버튼 클릭했을 때 필터링 되는 함수
  const searchActorClick = () => {
    if (searchValue.length === 0) {
      setSearchActor([]);
      setMoreActor(allActor.slice(0, 12));
    } else {
      let filterActor = allActor.filter((actor) =>
        actor.ActorName.replace(/ /g, "").match(searchValue)
      );

      setSearchActor(filterActor);
      setMoreActor(filterActor.slice(0, 12));
    }
  };

  // 더보기 버튼 눌렀을 때 더 보여주는 함수
  const moreActorHandler = () => {
    if (searchActor.length > moreActor.length) {
      setMoreActor(searchActor.slice(0, moreActor.length + 6));
    } else {
      setMoreActor(allActor.slice(0, moreActor.length + 6));
    }
  };

  return (
    <div className="search_Container">
      <div className="search_In">
        <div className="searchBarBtn">
          <input
            onKeyPress={(e) => (e.key === "Enter" ? searchActorClick() : null)}
            onChange={(e) => setSearchValue(e.target.value)}
            className="searchBar"
            type="text"
            placeholder="어떤 배우를 찾으시나요?"
          ></input>
          <button onClick={() => searchActorClick()} className="searchBtn">
            Search
          </button>
        </div>

        <div className="searchActor_container">
          <div className="searchActor">
            {moreActor.map((actor, index) => {
              return (
                <Actor
                  setSelectedActor={setSelectedActor}
                  key={index}
                  actor={actor}
                />
              );
            })}
          </div>
        </div>

        {moreActor.length === 0 ? (
          <div className="search_have_none_actors">
            <span>찾는 배우가 존재하지 않습니다!</span>
          </div>
        ) : null}

        {moreActor.length === allActor.length ||
        moreActor.length === 0 ||
        searchActor.length === moreActor.length ? (
          <div className="search_have_none_actors_blank"></div>
        ) : (
          <div className="search_more_actor">
            <button onClick={() => moreActorHandler()}>더보기</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
