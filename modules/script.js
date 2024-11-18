



// async function loadTranscript() {
//       // let data = await fetch("./transcript.json")
//       const syncData1 = [
//       { speaker: "p", end: "4", start: "0", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel risus nibh. Mauris scelerisque feugiat lorem a ornare. Morbi pellentesque odio urna, a posuere sapien ullamcorper in. Vivamus non tristique tellus, id eleifend ligula. Mauris luctus feugiat aliquet. Nam aliquet libero et ante accumsan, id pretium nunc sagittis. Fusce a erat eu massa finibus sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum risus eros. Nunc suscipit viverra est nec fermentum. Donec felis diam, vestibulum id leo id, semper eleifend velit. Aliquam non lorem vitae sapien hendrerit vestibulum. Nam vel lacinia lacus, a condimentum diam. " +
//         "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. In vel risus nibh. Mauris scelerisque feugiat lorem a ornare. Morbi pellentesque odio urna, a posuere sapien ullamcorper in. Vivamus non tristique tellus, id eleifend ligula. Mauris luctus feugiat aliquet. Nam aliquet libero et ante accumsan, id pretium nunc sagittis. Fusce a erat eu massa finibus sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum risus eros. Nunc suscipit viverra est nec fermentum. Donec felis diam, vestibulum id leo id, semper eleifend velit. Aliquam non lorem vitae sapien hendrerit vestibulum. Nam vel lacinia lacus, a condimentum diam."
//        },
//       { speaker: "s", end: "8", start: "4", text: "Nom Nom Nom. Fair warning: I bite" },
//       { speaker: "p", end: "12", start: "8", text: "ugemu-jugemu GokÅnosurikire Kaijarisuigyo-no SuigyÅmatsu Unraimatsu FÅ«raimatsu KÅ«nerutokoroni-sumutokoro YaburakÅjino-burakÅji Paipopaipo-paiponoshÅ«ringan ShÅ«ringanno-gÅ«rindai GÅ«rindaino-ponpokopÄ«no-ponpokonÄno ChÅkyÅ«meino-chÅsuke" },
//       { speaker: "s",  end: "16", start: "12", text: "Measure" },
//       { speaker: "p", end: "20", start: "16", text: "Measure" },
//       { speaker: "s", end: "24", start: "20", text: "Measure" },
//       { speaker: "p", end: "28", start: "24", text: "Measure" },
//       { speaker: "s", end: "32", start: "28", text: "Measure" }
//     ];
//       return syncData1;
//     }



(function(win, doc) {
    
    var audioPlayer = doc.getElementById("audiofile");
    // var subtitles = doc.getElementById("subtitles");
    var subtitleBox = doc.getElementById("subtitle-box");
    var questionBox = doc.getElementById("question-box");
    var scroll_switch = doc.getElementById("scroll-switch");
    var scroll_label = doc.getElementById("scroll-switch1");
    var autoscroll = doc.getElementById("autoscroll");
    var controlPanel = doc.getElementById("control-panel");

    function createQuestion(currTime) {
      
      
          fetch('questions.json')
          .then((response) => response.json())
          .then((json) => {
            
          var element;
          //console.log(syncData.length); //13 (lines)
          for (var i = 0; i < json.length; i++) {
            if(json[i].start <= currTime) {
              element = doc.createElement("span");
              element.setAttribute("id", "c"); //not needed?
              ele1 = doc.createElement("p");
              ele1.innerText = "Current Question\n";
              ele1.className = "currQuestionHeader"
              ele2 = doc.createElement("p");
              ele2.innerText = json[i].text;
              ele2.className = "currQuestionBody"
              element.appendChild(ele1);
              element.appendChild(ele2);


              // element.innerText = ele1.innerText + json[i].text;
              // element.style.fontWeight = 'bold';
              
              //Method 3 (Works best)
              sarImg = new Image(100,100);
              sarImg.src = 'assets/images/pokemon.png';
              sarImg.id = "sar";
              sarImg.className = "profile-photos";
      
              biteImg = new Image(100,150);
              biteImg.src = 'assets/images/micbite.jpg';
              biteImg.id = "sar";
              biteImg.className = "profile-photos";


              alurImg = new Image(100,150);
              alurImg.src = 'assets/images/alur.png';
              alurImg.id = "alur";
              alurImg.className = "profile-photos";
      
              profImg = new Image(100,100);
              profImg.src = 'assets/images/Sarah prof.png';
              profImg.id = "prof";
              profImg.className = "profile-photos";


              qImg = new Image(50,50);
              qImg.src = "assets/images/qmark.gif";
              qImg.id = "sar"
              qImg.className = "profile-photos";

              qImg2 = new Image(50,50);
              qImg.className = "profile-photos";
              qImg2.src = "assets/images/qmark.gif";
              
              const newDiv = document.createElement("div");
              // newDiv.style.background = "gray";
              newDiv.style.color = "white";
              newDiv.className = "question-display";
      
              if(json[i].speaker == 'sarah') {
                newDiv.append(qImg);
              } else {
                newDiv.append(profImg);
              }
            

              questionBox.innerHTML = "";
              newDiv.appendChild(element);
              newDiv.appendChild(qImg2);
              questionBox.append(newDiv);
            } else {
              // do Nothing 
            }
          }


        } );
     
    }


    function pageScroll() {
      window.scrollBy(0,1);
      scrolldelay = setTimeout(pageScroll,10);
    }
  
    function createSubtitle() {

      var syncData = [
        { speaker: "p", end: "4", start: "0", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel risus nibh. Mauris scelerisque feugiat lorem a ornare. Morbi pellentesque odio urna, a posuere sapien ullamcorper in. Vivamus non tristique tellus, id eleifend ligula. Mauris luctus feugiat aliquet. Nam aliquet libero et ante accumsan, id pretium nunc sagittis. Fusce a erat eu massa finibus sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum risus eros. Nunc suscipit viverra est nec fermentum. Donec felis diam, vestibulum id leo id, semper eleifend velit. Aliquam non lorem vitae sapien hendrerit vestibulum. Nam vel lacinia lacus, a condimentum diam. " +
              "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. In vel risus nibh. Mauris scelerisque feugiat lorem a ornare. Morbi pellentesque odio urna, a posuere sapien ullamcorper in. Vivamus non tristique tellus, id eleifend ligula. Mauris luctus feugiat aliquet. Nam aliquet libero et ante accumsan, id pretium nunc sagittis. Fusce a erat eu massa finibus sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum risus eros. Nunc suscipit viverra est nec fermentum. Donec felis diam, vestibulum id leo id, semper eleifend velit. Aliquam non lorem vitae sapien hendrerit vestibulum. Nam vel lacinia lacus, a condimentum diam."
             }
      ]; 

      fetch('transcript.json')
      .then((response) => response.json())
      .then((json) => {
        
      var element;
      //console.log(syncData.length); //13 (lines)
      for (var i = 0; i < json.length; i++) {
        element = doc.createElement("span");
        element.setAttribute("id", "c");   //not needed?



        //element.innerText = json[i].text + " " + i + ""; //For testing purposes only
        element.innerText = json[i].text
        element.className = "dialouge";
        
        //Method 3 (Works best)
        sarImg = new Image(100,100);
        sarImg.src = 'assets/images/sarah.png'; 
        sarImg.id = "sar";
        sarImg.className = "profile-photos";


        cImg = new Image(100,100);
        cImg.src = 'assets/images/moo.png'; 
        cImg.id = "chris";
        cImg.className = "profile-photos";


        mImg = new Image(100,100);
        mImg.src = 'assets/images/max.png'; 
        mImg.id = "max";
        mImg.className = "profile-photos";

        // biteImg = new Image(100,100);
        // biteImg.src = 'assets/images/micbite.jpg';
        // biteImg.id = "sar";
        // biteImg.className = "profile-photos";
        // biteImg.style.border = "10px solid rgb(135,233,252)";

        alurImg = new Image(100,100);
        alurImg.src = 'assets/images/alur.png';
        alurImg.id = "sar";
        alurImg.className = "profile-photos";
        

        profImg = new Image(100,100);
        profImg.src = 'assets/images/Sarah prof.png';
        profImg.id = "prof";
        profImg.className = "profile-photos";
        // biteImg.style.border = "10px solid rgb(135,233,252)";
        
        const newDiv = document.createElement("div");
        newDiv.style.background = "gray";
        newDiv.style.color = "white";
        newDiv.className = "talk-box";
        newDiv.style.height = "fit-content";

        const inDiv1 = doc.createElement("div");
        const inDiv2 = doc.createElement("div");
        const tempContainer = doc.createElement("div");
        tempContainer.className = "tempContainer";
        if(json[i].speaker == 'sarah') {
          
          inDiv1.className = "segment1";
          const caption = doc.createElement("figcaption");
          caption.innerText = "Sarah Garrison"
          caption.style.background = "rgb( 81,178,189)";
          inDiv1.appendChild(sarImg);
          inDiv1.appendChild(caption);
          tempContainer.appendChild(inDiv1);
          // newDiv.append(inDiv1);
          // newDiv.style.background = "rgb(184,69,242)"; //Purple Blue Pairing
          newDiv.style.background = "rgb( 81,178,189)";
        } else if(json[i].speaker =='chris') {

          inDiv1.className = "segment1";
          const caption = doc.createElement("figcaption");
          caption.innerText = "Christopher Powell"
          caption.style.background = "rgb( 81,178,189)";
          inDiv1.appendChild(cImg);
          inDiv1.appendChild(caption);
          tempContainer.appendChild(inDiv1);
          // newDiv.append(inDiv1);
          // newDiv.style.background = "rgb(184,69,242)"; //Purple Blue Pairing
          newDiv.style.background = "rgb( 81,178,189)";


        } else if(json[i].speaker =='max') {

          inDiv1.className = "segment1";
          const caption = doc.createElement("figcaption");
          caption.innerText = "Max"
          caption.style.background = "rgb( 81,178,189)";
          inDiv1.appendChild(mImg);
          inDiv1.appendChild(caption);
          tempContainer.appendChild(inDiv1);
          // newDiv.append(inDiv1);
          // newDiv.style.background = "rgb(184,69,242)"; //Purple Blue Pairing
          newDiv.style.background = "rgb( 81,178,189)";


        }else if(json[i].speaker == 'rajeev') {

          inDiv1.className = "segment1";
          const caption = doc.createElement("figcaption");
          caption.innerText = "Prof. Rajeev Alur"
          // caption.style.background = "rgb( 81,178,189)";
          caption.style.background = "rgb( 100,200,150)";
          inDiv1.appendChild(alurImg);
          inDiv1.appendChild(caption);
          tempContainer.appendChild(inDiv1);
          // newDiv.append(inDiv1);
          // newDiv.style.background = "rgb(184,69,242)"; //Purple Blue Pairing
          // newDiv.style.background = "rgb( 81,178,189)"; 
          newDiv.style.background = "rgb( 100,200,150)";
        } else {
      
          inDiv2.className = "segment1";
          const caption = doc.createElement("figcaption");
          caption.innerText = "Prof.\nFernandez-Duque"
          caption.style.background = "rgb(180,206,216)";
          inDiv2.appendChild(profImg);
          inDiv2.appendChild(caption);
          tempContainer.appendChild(inDiv2);
          // newDiv.append(inDiv1);
          // newDiv.style.background = "rgb(163,139,242)"; //Purple Blue Pairing
          newDiv.style.background = "rgb(180,206,216)";
        }
        
       tempContainer.appendChild(element);

        const timeStamp = document.createElement("div");
        timeStamp.innerText = "0" + json[i].start + ":00";
        timeStamp.className = "timestamp";
        // element.appendChild(timeStamp);
      
        newDiv.appendChild(tempContainer);
        // newDiv.appendChild(timeStamp);
        
        subtitleBox.append(newDiv);
        //console.log(element)  //"<span id='c_0'>There </span>"
      }


    });
    }

    createSubtitle();

    counter = 0;

    audioPlayer.addEventListener("timeupdate", function(e) {   //timeupdate event
      // const tS = document.getElementsByClassName("timeStamp");
      var currTime = audioPlayer.currentTime;
      // tS[0].innerText = currTime;
      console.log(currTime);
      fetch('transcript.json')
      .then((response) => response.json())
      .then((json) => {
        json.forEach(function(element, index, array) {
            
          //Bold/Highlight Method 2
          if (currTime >= element.start && currTime <= element.end && subtitleBox.children[index].className != "talk-box-read") {
            //&& subtitleBox.children[index].className != "talk-box-read"

            console.log(index + " -- " + element["start"]);
            console.log("Change Successful" + " -- " + element["start"]);
            subtitleBox.children[index].className = "talk-box-read";
            // subtitleBox.children[index].style.background = "red";
            // createQuestion(audioPlayer.currentTime);
  
            //Scroll Method 1
            setTimeout(() => {
              if(scroll_switch.checked){
                // autoscroll.style.color = "white";
                subtitleBox.children[index].scrollIntoView({
                  behavior: 'smooth',
                  // block: 'center'
                  block: 'end'
              })
            }
              
            }, 10);
  
          
          }

          });



      })
      
        
    });


    scroll_label.addEventListener("mousedown", function(e) {
      if(scroll_switch.checked){
        autoscroll.style.color = "white";
        autoscroll.innerText = "Autoscroll off ";
      } else {
        autoscroll.style.color = "#56AEFF";
        autoscroll.innerText = "Autoscroll on ";
      }

    })



    //  // The number of bars that should be displayed
    //  const NBR_OF_BARS = 50;

    //  // Get the audio element tag
    //  const audio = document.querySelector("audio");
 
    //  // Create an audio context
    //  const ctx = new AudioContext();
 
    //  // Create an audio source
    //  const audioSource = ctx.createMediaElementSource(audio);
 
    //  // Create an audio analyzer
    //  const analayzer = ctx.createAnalyser();
 
    //  // Connect the source, to the analyzer, and then back the the context's destination
    //  audioSource.connect(analayzer);
    //  audioSource.connect(ctx.destination);
 
    //  // Print the analyze frequencies
    //  const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
    //  analayzer.getByteFrequencyData(frequencyData);
    //  console.log("frequencyData", frequencyData);
 
    //  // Get the visualizer container
    //  const visualizerContainer = document.querySelector(".visualizer-container");
 
    //  // Create a set of pre-defined bars
    //  for( let i = 0; i < NBR_OF_BARS; i++ ) {
 
    //      const bar = document.createElement("DIV");
    //      bar.setAttribute("id", "bar" + i);
    //      bar.setAttribute("class", "visualizer-container__bar");
    //      visualizerContainer.appendChild(bar);
 
    //  }
 
    //  // This function has the task to adjust the bar heights according to the frequency data
    //  function renderFrame() {
 
    //      // Update our frequency data array with the latest frequency data
    //      analayzer.getByteFrequencyData(frequencyData);
 
    //      for( let i = 0; i < NBR_OF_BARS; i++ ) {
 
    //          // Since the frequency data array is 1024 in length, we don't want to fetch
    //          // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
    //          const index = (i + 10) * 2;
    //          // fd is a frequency value between 0 and 255
    //          const fd = frequencyData[index];
 
    //          // Fetch the bar DIV element
    //          const bar = document.querySelector("#bar" + i);
    //          if( !bar ) {
    //              continue;
    //          }
 
    //          // If fd is undefined, default to 0, then make sure fd is at least 4
    //          // This will make make a quiet frequency at least 4px high for visual effects
    //          const barHeight = Math.max(4, fd || 0);
    //          bar.style.height = barHeight + "px";
 
    //      }
 
    //      // At the next animation frame, call ourselves
    //      window.requestAnimationFrame(renderFrame);
 
    //  }
 
    //  renderFrame();
    //  audio.play();

    //   window.addEventListener("click", function(event) {

          
    //   });
     
     

  })

  //AUDIO VISUALIZER

  
  (window, document);




  