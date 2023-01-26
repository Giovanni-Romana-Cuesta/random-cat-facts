import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { getGifs, getRandomFact } from './services/services';
import './App.css';

function App() {
  const [gifs, setGifs] = useState();
  const [fact, setFact] = useState();
  const [loading, setLoading] = useState(false);

  const getFact = async () => {
    setLoading(true);
    try {
      const response = await getRandomFact();
      setFact(response);
      const gifsResponse = await getGifs(response);
      setGifs(gifsResponse);
    } catch (error) {
      setFact('Something went wrong!!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main-container'>
      <div className='container'>
        <button onClick={getFact}>Get Random Cats Fact</button>
        {loading && <Loader />}
        {!loading && (
          <>
            {fact && <span>{fact}</span>}
            {gifs && (
              <div className='gifs-container'>
                {gifs.map((gif) => (
                  <img key={gif.id} src={gif.images.fixed_height.url} alt={`gif_${gif.id}`} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
