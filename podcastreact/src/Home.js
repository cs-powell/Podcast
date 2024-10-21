import './Home.css';

function Home() {
  return (
    <div classname="Home">
        <header classname="Home-header">
      <div class= "banner">
        Test
        {/* <img class="banner" src="assets/images/Actions with no potential copy.png" alt="Actions with no Potential" width="500"></img> */}
     </div>
     

     <div class="body">
        {/* <!-- Website Menu --> */}
        <div class = "separator">
            <div class ="menu">

                <a href="podcast.html">
                    <button >Podcast</button>
                </a>

                <a href="guests.html">
                    <button >Guests</button>
                </a>

                <a href="authors.html">
                    <button >Authors</button>
                </a>

                <a href="authors.html">
                    <button >Works Cited</button>
                </a>
            </div>
        </div>

        <div class="audioBlock">
            <p> Test Audio(It's just a Brass Quintet Performance Right Now)</p>
            <audio controls>
                {/* <source src="assets/audio/yt5s.com - Vuelta del Fuego (128 kbps).mp3" type="audio/mp3"></source> */}
             </audio>
        </div>

        {/* <!-- <audio id="audiofile" src="https://www.codepunker.com/resources/audio-sync-with-text/10bears.mp3" controls></audio><br>
        <div id="subtitles"></div> --> */}

     </div>
     </header>
    </div>
  );
}

export default Home;