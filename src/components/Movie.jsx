import { NavLink } from "react-router-dom";

function Movie({ movie}) {



const {id} = movie
  return (
    <NavLink to={`movies/${id}`} data-testid="movie-card">
      <div
        data-testid="movie-poster"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
        }}
        className=" w-[250px] h-[370px]  py-[15.58px] px-4"
      >
        <div className="flex items-start justify-center">
          <p className="font-bold bg-white-50%/50 text-gray-900 backdrop-blur-sm rounded-xl py-[3px] px-2 w-[74px] h-[22px]  text-[11px] leading-normal">
            TV SERIES
          </p>
          <button className="ml-auto">
            <img src="Favorite.svg" alt="Favorite" />
          </button>
        </div>
      </div>
      <div className="pt-3 w-[250px]">
        <h3
          data-testid="movie-release-date"
          className="text-xs font-bold text-grey-400"
        >
          {movie.release_date}
        </h3>
        <h4
          data-testid="movie-title"
          className="pt-3 text-gray-900 text-[18px] font-bold"
        >
          {movie.title}
        </h4>
        <div className="flex justify-between pt-4">
          <div className="inline-flex items-center gap-2.5">
            <img src="imdb.svg" alt="imdb" />
            <p className="text-xs font-normal text-gray-900">{movie.vote_average} / 10</p>
          </div>
          <div className="inline-flex items-center gap-2.5 ">
            <img src="tomato.svg" alt="tomato" />
            <p className="text-xs font-normal text-gray-900">{movie.popularity.toFixed(1)}%</p>
          </div>
        </div>
      </div>
      <p className="pt-3 text-xs font-bold text-grey-400">
        Action,Adventure,Horror
      </p>
    </NavLink>
  );
}

export default Movie;
