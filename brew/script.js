var brewCount = 0;

// Main createPopup Function
function brewInit() {
  brewCount += 1;
  popupCreate('Brew [' + brewCount + ']',`<!-- Start of 3brew Dom-->

          <div id='brewBodyDiv` + brewCount + `'>
          <div style='padding: 10px;'>
          <span style='background-color: #3c3836;color: #e6d7ac;'>Welcome to brew!</span><br>
          The best <highlight>netbox-compatable</highlight> browser that is better than kget!
          <br><br>
          The advantages include:<br>
          <ul><li>powerline themes</li>
          <li>nice start menu</li>
          <li>ability to change pages without reopening</li></ul><br>
          To get started, click the goto button in the corner and type in a URL.<br>
          <br>
          <highlight>ALERT </highlight> Remember that google and other big sites wont work..<br>
          <span style='position: absolute;bottom: 25px;right: 5px;opacity: 15%;'>Made with <3 by brody king</span>
          </div>
          </div>
          <div id='brewBodyConfig` + brewCount + `' style='padding: 10px;display: none;'>
          <span style='background-color: #3c3836;color: #e6d7ac;'>Brew Config</span><br>
          <br><highlight>ALERT </highlight> There are no settings to be modified... YET!
          </div>

          <ul class="brewPowerline" style="display: flex;">
          <li class="left">  
          <div><a href="#" onclick='brewStartpage("` + brewCount + `")'> brew </a></div> 
          <div class="endsection"></div> 
          <div><a href="#" onclick="tsconf()">v0.3</a></div>
          <div class="endsection"></div>
          </li>
          <div class="center">
          <a href="#" id='brewURLDiv` + brewCount + `'>start page</a>
          </div>
          <li class="right">
          <div class="endsection"></div>
          <div><a href='#' onclick='brewConfig("` + brewCount + `")'>config</a></div>
          <div class="endsection"></div>
          <div><a href='#' onclick='brewURLChange("` + brewCount + `")'>goto</a></div></li></ul>`);
  var brewURL = document.getElementById("terminalinput").textContent.slice(5, Infinity);
  
  document.getElementById('Brew [' + brewCount + ']').style.backgroundColor = '#282828';
  document.getElementById('Brew [' + brewCount + ']').style.width = "800px";
  document.getElementById('Brew [' + brewCount + ']').style.height = "400px";
  document.getElementById('Brew [' + brewCount + ']popupbody').style.maxHeight = "91%";

  if(brewURL !== '') {
    document.getElementById('brewURLDiv' + brewCount).innerHTML = brewURL;
    document.getElementById('brewBodyDiv' + brewCount).innerHTML = `<iframe src='` + brewURL + `' style='width: 100%;height:91%;border: 0px solid black;position:absolute;' id='brewFrame` + brewCount + `'></iframe>`
  }

  terminline('Launching brew...')
}

function brewConfig(brewCount) {
  document.getElementById(`brewBodyDiv` + brewCount).style.display = "none";
  document.getElementById(`brewBodyConfig` + brewCount).style.display = "block";
}

function brewStartpage(brewCount) {
  document.getElementById(`brewBodyDiv` + brewCount).style.display = "block";
  document.getElementById(`brewBodyConfig` + brewCount).style.display = "none";
}

function brewURLChange(brewCount) {

  popupCreate('Change Brew URL',`<!-- start of dom --->
What is the URL you want to visit?<br>
><span id='brewNewURLInput' contenteditable='true' onclick='selectText("input")'>_</span>`);

  document.getElementById('Change Brew URL').style.width = "auto";
  document.getElementById('Change Brew URL').style.height = "auto";
  brewURLChangeSubmit(brewCount);
}

function brewURLChangeSubmit(brewCount) { // terminal command subbmitted
  document.getElementById('brewNewURLInput').addEventListener('keyup', function (evt) {
      if (evt.keyCode === 13) { // if enter key pressed
        var brewURL = document.getElementById('brewNewURLInput').textContent;
        document.getElementById('brewBodyDiv' + brewCount).innerHTML = `<iframe src='` + brewURL + `' style='width: 100%;height:91%;border: 0px solid black;position:absolute;' id='brewFrame` + brewCount + `'></iframe>`
        document.getElementById('brewURLDiv' + brewCount).innerHTML = brewURL;
        popupClose('Change Brew URL');
      } // end
    }); // end
  }

commands["brew"] = "brewInit()";


// Custom CSS
  // Create new link Element
  var link = document.createElement('link'); 
  
  // set the attributes for link element
  link.rel = 'stylesheet'; 
  
  link.type = 'text/css';
  
  link.href = 'https://brodyking.github.io/netbox-packages/brew/style.css'; 
  
  // Get HTML head element to append 
  // link element to it 
  document.getElementsByTagName('HEAD')[0].appendChild(link); 
