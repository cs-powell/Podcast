(function(win, doc) {

    //Global variables
    var wcBox = doc.getElementById("wc");
  
    function createWC() {
      //GET JSON
      fetch('wc.json')
      .then((response) => response.json())
      .then((json) => {
        
      var element;
      for (var i = 0; i < json.length; i++) {
        element = doc.createElement("span");
        element.setAttribute("id", "c");
        linkWrapper = doc.createElement("a");
        linkWrapper.href = json[i].link;
        element.innerText = json[i].text + " " + i + "";
        element.className = "dialouge";
        

        
        //Image Setup
        sarImg = new Image(100,100);
        sarImg.src = 'assets/images/pokemon.png'; 
        sarImg.id = "sar";
        sarImg.className = "profile-photos";

        biteImg = new Image(100,100);
        biteImg.src = 'assets/images/micbite.jpg';
        biteImg.id = "sar";
        biteImg.className = "profile-photos";

        profImg = new Image(100,100);
        profImg.src = 'assets/images/Sarah prof.png';
        profImg.id = "prof";
        profImg.className = "profile-photos";

        //Div Creation
        const newDiv = document.createElement("div");
        newDiv.style.background = "gray";
        newDiv.style.color = "white";
        newDiv.className = "wc-element";
        newDiv.style.height = "fit-content";

        const inDiv1 = doc.createElement("div");
        const inDiv2 = doc.createElement("div");
        const tempContainer = doc.createElement("div");
        tempContainer.className = "tempContainer";
        newDiv.style.background = "rgb( 81,178,189)";


        //ADDING IMAGES
        // if(json[i].speaker == 's') {
          
        //   inDiv1.className = "segment1";
        //   const caption = doc.createElement("figcaption");
        //   caption.innerText = "Sarah Garrison"
        //   caption.style.background = "rgb( 81,178,189)";
        //   inDiv1.appendChild(biteImg);
        //   inDiv1.appendChild(caption);
        //   tempContainer.appendChild(inDiv1);
        //   // newDiv.append(inDiv1);
        //   // newDiv.style.background = "rgb(184,69,242)"; //Purple Blue Pairing
          
        // } else {
        //   inDiv2.className = "segment1";
        //   const caption = doc.createElement("figcaption");
        //   caption.innerText = "Prof.\nFernandez-Duque"
        //   caption.style.background = "rgb(180,206,216)";
        //   inDiv2.appendChild(profImg);
        //   inDiv2.appendChild(caption);
        //   tempContainer.appendChild(inDiv2);
        //   // newDiv.append(inDiv1);
        //   // newDiv.style.background = "rgb(163,139,242)"; //Purple Blue Pairing
        //   newDiv.style.background = "rgb( 81,178,189)";
        //   // newDiv.style.background = "rgb(180,206,216)";
        // }
        
       tempContainer.appendChild(element);
        newDiv.appendChild(tempContainer);
        linkWrapper.appendChild(newDiv);
        
        wcBox.append(linkWrapper);
      }
    });
    }

    createWC(); 

  })

  
  (window, document);




  