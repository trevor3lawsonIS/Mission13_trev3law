import { useState } from "react";
import data from "../MovieData.json";

const movieArray = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(movieArray);

  const addMovie = () => {
    setListOMovies([
      ...movieArray,
      {
        Category: "Action/Adventure",
        Title: "Batman Begins",
        Year: 2005,
        Director: "Christopher Nolan",
        Rating: "PG-13",
        Edited: "No",
      },
    ]);
  };

  return (
    <>
      <div>
        <h3 className="text-center">Joel Hilton's Movie Collection</h3>
      </div>
      <br></br>
      <div>
        <table className="table table-striped table-bordered w-75 mx-auto">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="btn btn-primary"
        onClick={addMovie}
      >
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
