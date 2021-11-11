// detail
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/Detail.css";
import Actor from "../components/Actor";
import ActorProfile from "../components/ActorProfile";
import Movie from "../components/Movie";
import axios from "axios";
export default function Detail() {
  const { id } = useParams();
  const [isActor, setIsActor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const watchHandler = (state) => {
    setIsLoading(state);
  };

  const getId = (data) => {
    return data;
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.bryta.shop/actor/${id}`)
      .then((res) => {
        const data = res.data.actorDetail;
        setIsActor(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div>isLoading...</div>
      ) : (
        <div id="detail-container">
          <section className="detail-actor">
            <div className="detail-actor-about">
              <Actor getId={getId} actor={isActor && isActor} />
              <ActorProfile actor={isActor} />
            </div>
            <div className="detail-actor-movie">
              <h2 className="detail-actor-title">출연작</h2>
              <div className="detail-actor-movies">
                {isActor &&
                  isActor?.actor_movies.map((actor_movie) => (
                    <Movie
                      key={actor_movie.id}
                      moviePayload={{
                        id: actor_movie.id,
                        userId: 0,
                        movieId: actor_movie.movieId,
                        actorId: actor_movie.actorId,
                        watch: true,
                        movie: {
                          id: actor_movie.movie.id,
                          movieName: actor_movie.movie.movieName,
                          movieImage: actor_movie.movie.movieImage,
                        },
                      }}
                      movie={actor_movie.movie}
                      watchHandler={watchHandler}
                    />
                  ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
