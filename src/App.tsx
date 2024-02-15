import { useState } from 'react';
import './App.css';
import image from './Emoji.jpg';

function App() {
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const values = ['Yes', ' Yes Aluthita mass ', 'Confirm pannikava', 'Change panna matala', 'Sure ah ']; // Add your values here
  const values2 = ['No', 'Ennadi posukunu No solta', 'Yosichu porumaya sollu di', 'Ada avasarathuku poranthavalae', 'Pehh Aluthiko Pehh']; // Add your values here
  const [exceededYes, setExceededYes] = useState(false);
  const [exceededNo, setExceededNo] = useState(false);

  const handleYesClick = () => {
    if (yesCount < values.length) {
      setYesCount((count) => count + 1);
    } else {
      setExceededYes(true);
    }
  };

  const handleNoClick = () => {
    if (noCount < values2.length) {
      setNoCount((count) => count + 1);
    } else {
      setExceededNo(true);
    }
  };

  return (
    <>
      
      <div className="card">
        
        {!exceededYes &&  !exceededNo && (
          <>
            <h1> Be my girl This valentine? </h1>
            <button onClick={handleYesClick}>
              {values[yesCount] || 'Innoru time sollu '}
            </button>
            <button onClick={handleNoClick}>
              {values2[noCount] || 'Evalo kekaren la aluthitae iruka paaru kolupi'}
            </button>
          </>
        )}
        {exceededYes && (
          <>          <h1> Mass odiya odiya </h1>
          <img style={{width: '200px'}} src={image} alt="custom" />
          </>

        )}
        {exceededNo && (
          <h1>Podi Venna mavalae Na vera ponnu paka poren </h1>
        )}
      </div>
    </>
  );
}

export default App;
