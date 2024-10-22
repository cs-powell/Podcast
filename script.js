(function(win, doc) {
    var audioPlayer = doc.getElementById("audiofile");
    var subtitles = doc.getElementById("subtitles");
    // var syncData = [
    //   { end: "0.225", start: "0.125", text: "There" },
    //   { end: "0.485", start: "0.225", text: "were" },
    //   { end: "1.085", start: "0.485", text: "10 in" },
    //   { end: "1.325", start: "1.085", text: "his" },
    //   { end: "1.685", start: "1.325", text: "bed" },
    //   { end: "1.965", start: "1.685", text: "and the" },
    //   { end: "2.245", start: "1.965", text: "little" },
    //   { end: "2.565", start: "2.245", text: "one" },
    //   { end: "2.985", start: "2.565", text: "said" },
    //   { end: "3.485", start: "2.985", text: "Roll" },
    //   { end: "3.965", start: "3.485", text: "over!" },
    //   { end: "4.805", start: "3.965", text: "Roll" },
    //   { end: "5.405", start: "4.805", text: "over!" }
    // ];

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
  