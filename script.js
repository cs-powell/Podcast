(function(win, doc) {
    var audioPlayer = doc.getElementById("audiofile");
    var subtitles = doc.getElementById("subtitles");

    // var syncData = [
    //   { end: "2.500", start: "1.000", text: "I am Optimus Prime" },
    //   { end: "5.0", start: "3.0", text: "and I send this message" },
    //   { end: "7.0", start: "5.1", text: "to any surviving autobots" },
    //   { end: "9.5", start: "7.1", text: "taking refuge among the stars" },
    //   { end: "12.0", start: "10.7", text: "we are here" },
    //   { end: "20.0", start: "13.0", text: "we are waiting" }
    // ];

    var syncData = [
      { end: "4", start: "0", text: "Measure" },
      { end: "8", start: "4", text: "Measure" },
      { end: "12", start: "8", text: "Measure" },
      { end: "16", start: "12", text: "Measure" },
      { end: "20", start: "16", text: "Measure" },
      { end: "24", start: "20", text: "Measure" },
      { end: "28", start: "24", text: "Measure" },
      { end: "32", start: "28", text: "Measure" }
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
        element.innerText = syncData[i].text + " " + i + "\n\n\n\n\n\n\n\n ";
        subtitles.appendChild(element);
        //console.log(element)  //"<span id='c_0'>There </span>"
      }
    }
  
    audioPlayer.addEventListener("timeupdate", function(e) {   //timeupdate event
      syncData.forEach(function(element, index, array) {
        
        if (
          audioPlayer.currentTime >= element.start &&
          audioPlayer.currentTime <= element.end
        ){ 
          subtitles.children[index].style.background = "red";
          subtitles.children[index].style.fontWeight = "bold";
          
        //Scroll Method 1
          subtitles.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })

        //Scroll Method 2
        // var y =  subtitles.children[index].getBoundingClientRect().top; 
        // console.log(index + " " + y);
        // if(y > 0) {
        //   pageScroll();
        // }

        }

        
        
         //console.log(audioPlayer.currentTime); //eg 1.225931
        });
    });
  })(window, document);
  