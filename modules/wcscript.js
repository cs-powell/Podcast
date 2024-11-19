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
        element.innerText = json[i].text + "";
        element.className = "dialouge";

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
        
        tempContainer.appendChild(element);
        newDiv.appendChild(tempContainer);
        linkWrapper.appendChild(newDiv);
        
        wcBox.append(linkWrapper);
      }
    });
    }





    createWC();


    function createMC() {
      var mcBox = doc.getElementById("mc");

        //GET JSON
        fetch('mc.json')
        .then((response) => response.json())
        .then((json) => {

        var element;
        for (var i = 0; i < json.length; i++) {
          element = doc.createElement("span");
          element.setAttribute("id", "c");
          linkWrapper = doc.createElement("a");
          linkWrapper.href = json[i].link;
          element.innerText = json[i].text + "";
          element.className = "dialouge";

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
          
          tempContainer.appendChild(element);
          newDiv.appendChild(tempContainer);
          linkWrapper.appendChild(newDiv);
          mcBox.append(linkWrapper);

        }
      });
    }

    createMC();
    

  })

  
  (window, document);




  