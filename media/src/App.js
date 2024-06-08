import logo from './logo.svg';
import pawan1 from "./images/pawan1.jpg";
import Panja from "./audio/Panja.mp3";
import pk from "./video/pk.mp4";
import './App.css';

function App() {
  return (
    <form>
  <body id="index"> 
   <div>
      <h1 id="jnsp">Janasena</h1>
      <h2>Janasena poster</h2>
      <img src="https://yt3.googleusercontent.com/QbguYO06Ovn22JXZ-UGfaatZToAbY1lCcpj3Ec2YNVLgiR5fqNGYTrPGOJzcP2IFSYQdfQafA7A=s900-c-k-c0x00ffffff-no-rj">
      </img>
      <img src="./images/pawan.jpg"></img>
      <img src={pawan1}></img>
      <hr></hr>

      <h2>Janasena song</h2>
      <audio src="https://services.brninfotech.com/tws/media2/songs/DearComrade/05 - Comrade Anthem.mp3"controls></audio>
      <audio src="./audio/OG.mp3"controls></audio>
      <audio src={Panja}controls></audio>
      <hr></hr>

      <h2>videos</h2>
      <video className="videos"  src="https://services.brninfotech.com/tws/media2/trailers/DearComradeTeluguTeaser.mp4"controls></video>
      <video className="videos"  src="./video/pk.mp4" controls muted autoPlay></video>
      <video className="videos"  src={pk}controls muted ></video>
  </div>
  </body>
  </form>
  );
}
export default App;
