import "../css/MainPage.css";
import Actor from "../components/Actor";
import Movie from "../components/Movie";
function MainPage() {
  return (
    <div id="main-container">
      <nav className="main-nav">
        <section className="todayactor">
          <div className="todayactor-text">오늘의 배우</div>
          <div className="todayactor-images">
            <div className="todayactor-actor">
              <Actor />
            </div>
            <div className="todayactor-movies">
              <Movie />
              <Movie />
              <Movie />
            </div>
          </div>
        </section>
        <section className="main-bryta">
          <div className="main-bryta-name">Bryta란</div>
          <p className="main-bryta-about">필모깨기를 도와주는 Bryta</p>
        </section>
      </nav>
    </div>
  );
}

export default MainPage;
