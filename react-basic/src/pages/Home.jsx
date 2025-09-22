import { useState, useEffect } from "react";
import Movie from "../components/Movie/Movie";
import { MovieSection } from "./Home.styled";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState({
        search: "",
        genre: "all",
    });

    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year&limit=40`
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const genres = ["all", "Action", "Drama", "Music", "Comedy", "Documentary"];

    return (
        <main>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <form role="search">
                        <label htmlFor="search">
                            <input
                                id="search"
                                name="search"
                                type="search"
                                value={filters.search}
                                placeholder="Search..."
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        search: e.target.value,
                                    }))
                                }
                            />
                        </label>
                    </form>

                    <nav>
                        <ul
                            style={{
                                margin: "1rem 0",
                                display: "flex",
                                gap: "8px",
                            }}
                        >
                            {genres.map((g) => (
                                <li key={g}>
                                    <button
                                        onClick={() =>
                                            setFilters((prev) => ({
                                                ...prev,
                                                genre: g,
                                            }))
                                        }
                                        style={{
                                            padding: "8px 16px",
                                            borderRadius: "6px",
                                            border: "1px solid #ccc",
                                            backgroundColor:
                                                filters.genre === g
                                                    ? "#007bff"
                                                    : "transparent",
                                            color:
                                                filters.genre === g
                                                    ? "#fff"
                                                    : "#333",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {g}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <MovieSection>
                        {movies
                            .filter((movie) => {
                                const matchSearch = movie.title
                                    .toLowerCase()
                                    .includes(filters.search.toLowerCase());
                                const matchGenre =
                                    filters.genre === "all" ||
                                    movie.genres.includes(filters.genre);
                                return matchSearch && matchGenre;
                            })
                            .map((movie) => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    coverImg={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres}
                                />
                            ))}
                    </MovieSection>
                </div>
            )}
        </main>
    );
}

export default Home;
