import './Home.css';
import banner from '/Users/flyingtopher/Desktop/Code Citadel/School/3. PSYC 2288 Podcast/Podcast/podcastreact/src/assets/images/Actions with no potential copy.png';
import Separator from './separator';
function hello() {
    return (
    <div class ="hello-enclosure">

        <div class= "banner">
            <img class="banner" src={banner} alt="Actions with no Potential" width="500"></img>
        </div>
        
       <div class="main">
        <Separator/>
       </div>
        
        <div class="audioBlock">
            <p> Test Audio(It's just a Brass Quintet Performance Right Now)</p>
            <audio controls>
                {/* <source src="assets/audio/yt5s.com - Vuelta del Fuego (128 kbps).mp3" type="audio/mp3"></source> */}
             </audio>
        </div>
    </div>



    );
  }
  
  export default hello;