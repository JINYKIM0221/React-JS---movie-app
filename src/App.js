import {useEffect, useState} from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    //.then대신에 async-await을 보편적으로 사용함 await을 감싸는 await만들기 가능
    setMovies(json.data.movies);
    setLoading(false);
  };
    getMovies();
    return (
      <div>{loading ? (
        <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                  {movie.genres.map((g) =>(
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

//div key={}에 무조건 고유한 key값을 넣어줘야함
//차례로 movie의 고유한 id,movie이미지,movie제목,movie설명,movie장르를 가져오는데 장르는 array로 여러개있음
//그래서 key={g}라고 임의의 키값을 만들어줘서 ul태그안 li태그에 차례대로 나오게함










export default App;