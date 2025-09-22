import PropTypes from "prop-types";
// a태그 사용 시 브라우저 새로고침
// Link: 브라우저 새로 고침 없이 페이지 이동
import { Link } from "react-router-dom";
import { MovieCard } from "./Movie.styled";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <MovieCard>
            <img src={coverImg} alt={`${title} 이미지`} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </MovieCard>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
