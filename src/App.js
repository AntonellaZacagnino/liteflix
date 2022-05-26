import React, { useEffect, useState} from 'react';
import './styles/App.css';
import Axios from 'axios';
import Featured from './Components/Featured/Featured';
import Popular from './Components/Popular/Popular';
import Menu from './Components/Menu/Menu'

function App() {
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        const response = await Axios({
          url: "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20",
        });
        const random = Math.floor(Math.random() * response.data.results.length);
        setFeatured(response.data.results[random]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeaturedData();
    
    const fetchPopularData = async () => {
      try {
        const response = await Axios({
          url: "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20",
        });
        const data = response.data.results
        setPopular([data[0], data[1], data[2], data[3]]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularData();
  }, [setFeatured, setPopular]);


  const imagesPath = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="App" >
      <div className='background' style={{backgroundImage: `url(${imagesPath + featured.backdrop_path})`}}></div>
      <header className="App-header">
        <div className='logo'>
          <h1>Lite</h1><span>flix</span>
        </div>
      </header>
      <section>
        <Menu />
        <Featured title={featured.original_title}/>
        <Popular populars={popular} imagesPath={imagesPath} />
      </section>
    </div>
  );
}

export default App;
