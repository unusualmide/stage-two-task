import { useState } from "react";
import Footer from "./Footer";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

function Homepage() {
  const [query, setQuery] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const { results: result } = searchMovie;

  const { results } = query;


  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=457f3795871543027839e36d2b0df9e1"
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setQuery(data);
        if (data.Response === false) throw new Error('Movie not found')
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!search.length) return;

    async function fetchSearch() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=457f3795871543027839e36d2b0df9e1&query=${search}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setSearchMovie(data);

        if (data.Response === false) throw new Error('Movie not found')
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchSearch();
  }, [search]);

  return (
    <>
      <Header search={search} setSearch={setSearch} query={query} />
      <Main
        search={search}
        result={result}
        results={results}
        isLoading={isLoading}
        error={error}
      />
      <Footer />
    </>
  );
}

export default Homepage;
