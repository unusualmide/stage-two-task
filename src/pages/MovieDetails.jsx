import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

function MovieDetails({ setError }) {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  let { id } = useParams();

  useEffect(
    function () {
      async function fetchCredits() {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=457f3795871543027839e36d2b0df9e1`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await res.json();
          setCredits(data);
          if (data.Response === false) throw new Error("Movie not found");
        } catch (error) {
          setError(error.message);
        }
      }
      fetchCredits();
    },
    [id, setError]
  );

  const { cast } = credits || {};
  const { crew } = credits || {};

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=457f3795871543027839e36d2b0df9e1`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await res.json();
          setDetails(data);
          if (data.Response === false) throw new Error("Movie not found");
        } catch (error) {
          setError(error.message);
        }
      }
      fetchDetails();
    },
    [id, setError]
  );

  const { genres } = details || {};
  const { runtime } = details || {};
  const { videos } = details || {};
  const { results } = videos || {};
  const { key } = results?.[0] || {};
  const {release_date} = details || {}

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  
  return (
    <div className="pl-5 sm:pl-[38px] pt-6 sm:pt-[38px] sm:pr-[51px] ">
      <VideoPlayer videoKey={key} />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${details?.poster_path})`,
        }}
        className="w-[375px] h-[300px] rounded-[20px] flex justify-center items-center  flex-col gap-[9px] sm:hidden"
      ></div>
      <div className="pt-[31px] flex flex-col sm:flex-row gap-[26px]">
        <div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[17px]">
            <div>
              <p
                data-testid="movie-title"
                className="text-base font-medium sm:text-xl text-black-soft"
              >
                {details.original_title}
                <span data-testid="movie-release-date" className="font-bold">
                  •
                </span>
                {new Date (release_date)}
                <span className="font-bold"> • </span> PG-13
                <span data-testid="movie-runtime" className="font-bold">
                  •
                </span>
                {hours}h {minutes}m
              </p>
            </div>
            <ul className="flex gap-3 sm:items-center sm:justify-center">
              {genres?.map((genre) => (
                <li
                  className="w-[84px] h-[30px] rounded-[15px] border border-red-40% text-red-70% text-[15px] font-medium text-center inline-flex justify-center"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-testid="movie-overview"
            className="font-normal text-base sm:text-xl text-bleck-100 w-80 sm:min-w-[774px] sm:min-h-[90px] mt-4 sm:mt-[25px] text-justify"
          >
            <p>{details.overview}</p>
          </div>
          <h3 className="text-bleck-100 text-base sm:text-xl font-normal pt-5 sm:pt-[36px]">
            Director:
            <span className="text-red-70%">
              {crew?.slice(7, 8).map((cre) => (
                <p key={cre.id}>{cre.name}</p>
              ))}
            </span>
          </h3>
          <h3 className="text-bleck-100 text-base sm:text-xl font-normal pt-[31px]">
            Writers:
            <span className="text-red-70%">
              {crew?.slice(2, 4).map((cre, idx) => (
                <p key={idx}>{cre.name}</p>
              ))}
            </span>
          </h3>
          <h3 className="text-bleck-100 text-base sm:text-xl font-normal pt-[31px]">
            Stars:
            <div className="text-red-70%">
              {cast?.slice(0, 2).map((cas, idx) => (
                <p key={idx}>{cas.name}</p>
              ))}
            </div>
          </h3>
          <div className="hidden  w-[785px] h-[55px] border rounded-[10px] border-grey-soft mt-[31px] sm:flex justify-start items-center">
            <div className="w-[253px] h-[55px] rounded-[10px] bg-red-70% inline-flex justify-center items-center">
              <p className="text-xl font-medium text-white">
                Top rated movie #65
              </p>
            </div>
            <div className="px-6 inline-flex justify-center items-center gap-[220px]">
              <p className="text-xl font-medium text-bleck-100">
                Award 9 nominations
              </p>
              <img src="/Expand Arrow.png" alt="Expand Arrow" />
            </div>
          </div>
        </div>

        <div>
          <div className="hidden sm:inline-flex justify-center items-center gap-[9px]">
            <div className="flex items-center justify-center gap-1">
              <img className="object-contain" src="/Share.png" alt="Share" />
              <img className="object-contain" src="/Bookmark.png" alt="" />
              <img className="object-contain" src="/Star.png" alt="Star" />
            </div>
            <span className="text-white-soft text-[18px] text-center font-medium">
              {details.vote_average?.toFixed(1)}
              <span className="text-[18px] font-medium text-bleck-100 ">
                | 350k
              </span>
            </span>
          </div>
          <div className="w-[220px] h-[55px] bg-red-70% rounded-[10px] mt-[29px] sm:flex justify-center items-center hidden">
            <button className="inline-flex justify-center items-center gap-[10px] text-white text-md font-medium">
              <img src="/Two Tickets.svg" alt="" /> <p>See Showtimes</p>
            </button>
          </div>
          <div className="w-[220px] h-[55px] border pt-3 border-red-70% bg-red-40% rounded-[10px] mt-[29px] hidden sm:flex justify-center items-center">
            <button className="inline-flex  justify-center items-center gap-[10px] text-bleck-100 text-md font-medium">
              <img src="/List.svg" alt="" /> <p>More watch options</p>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${details.backdrop_path})`,
            }}
            className="hidden sm:block  border border-grey-soft w-[215px] h-[222px] mt-[31px] rounded-lg"
          >
            <div className="w-[215px] h-[42px] rounded-lg bg-black/50 backdrop-blur-sm flex justify-center items-center object-bottom">
              <p className="text-white-soft text-[10px] font-medium shadow-sm inline-flex gap-3 justify-center items-center">
                <span>
                  <img src="/public/List-White.png" alt="List White" />
                </span>
                The Best Movies and Shows in September
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
