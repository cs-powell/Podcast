(function(win, doc) {
    var audioPlayer = doc.getElementById("audiofile");
    var subtitles = doc.getElementById("subtitles");
    var subtitleBox = doc.getElementById("subtitle-box");

    // var syncData = [
    //   { end: "2.500", start: "1.000", text: "I am Optimus Prime" },
    //   { end: "5.0", start: "3.0", text: "and I send this message" },
    //   { end: "7.0", start: "5.1", text: "to any surviving autobots" },
    //   { end: "9.5", start: "7.1", text: "taking refuge among the stars" },
    //   { end: "12.0", start: "10.7", text: "we are here" },
    //   { end: "20.0", start: "13.0", text: "we are waiting" }
    // ];

    var syncData = [
      { speaker: "p", end: "4", start: "0", text: "Measure" },
      { speaker: "s", end: "8", start: "4", text: "Measure" },
      { speaker: "p", end: "12", start: "8", text: "Measure" },
      {speaker: "s",  end: "16", start: "12", text: "Measure" },
      { speaker: "p", end: "20", start: "16", text: "Measure" },
      { speaker: "s", end: "24", start: "20", text: "Measure" },
      { speaker: "p", end: "28", start: "24", text: "Measure" },
      { speaker: "s", end: "32", start: "28", text: "Measure" }
    ];



    createSubtitle();


    function pageScroll() {
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll,10);
  }
  
    function createSubtitle() {
      var element;
      //console.log(syncData.length); //13 (lines)
      for (var i = 0; i < syncData.length; i++) {
        element = doc.createElement("span");
        element.setAttribute("id", "c_" + i);   //not needed?
        element.innerText = syncData[i].text + " " + i + "\n\n\n\n\n\n\n\n";
        
        //Method 3 (Works best)
        sarImg = new Image(100,100);
        sarImg.src = '/Users/flyingtopher/Desktop/Code Citadel/School/3. PSYC 2288 Podcast/Podcast/assets/images/pokemon.png';
        sarImg.id = "sar";
        profImg = new Image(100,100);
        profImg.src = '/Users/flyingtopher/Desktop/Code Citadel/School/3. PSYC 2288 Podcast/Podcast/assets/images/Sarah prof.png';
        profImg.id = "prof";
        
        const newDiv = document.createElement("div");
        newDiv.style.background = "green";


        if(syncData[i].speaker == 's') {
          newDiv.append(sarImg);
        } else {
          newDiv.append(profImg);
        }
       
        newDiv.appendChild(element);

        subtitleBox.append(newDiv);
        //console.log(element)  //"<span id='c_0'>There </span>"
      }
    }


  
    audioPlayer.addEventListener("timeupdate", function(e) {   //timeupdate event
      syncData.forEach(function(element, index, array) {
        
        //Method 1
        // if (
        //   audioPlayer.currentTime >= element.start &&
        //   audioPlayer.currentTime <= element.end
        //   && index%2 == 1
        // ){ 
        //   subtitles.children[index].style.background = "red";
        //   subtitles.children[index].style.fontWeight = "bold";
          
        // //Scroll Method 1
        //   subtitles.children[index].scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'center'
        // })

        // //Scroll Method 2
        // // var y =  subtitles.children[index].getBoundingClientRect().top; 
        // // console.log(index + " " + y);
        // // if(y > 0) {
        // //   pageScroll();
        // // }

        // }


        //Bold/Highlight Method 2
        if (
          audioPlayer.currentTime >= element.start &&
          audioPlayer.currentTime <= element.end
        ){ 
          subtitleBox.children[index].style.background = "red";
          subtitleBox.children[index].style.fontWeight = "bold";
          const currImg = subtitleBox.children[index].getElementsByTagName()
          currImg.setAttribute("width", '200px');
          currImg.setAttribute("height", '200px');
          var x = document.querySelector("#parent").querySelector("#child");
    
        //Scroll Method 1
          subtitleBox.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
        }

        
        
         //console.log(audioPlayer.currentTime); //eg 1.225931
        });
    });
  })
  
  
  (window, document);
  