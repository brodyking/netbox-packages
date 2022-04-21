
      function tseOpen() {
        if (document.getElementById('terminalinput').textContent.slice(3,Infinity) == "") {
          terminline('You must enter a file to open TSEdit');
        } else {
          var tseDocTitle = document.getElementById('terminalinput').textContent.slice(4,Infinity);
          popupCreate('tse: ' + tseDocTitle,`
          
          <span contenteditable="true" id='` + tseDocTitle + `input'>_</span>
          
          
          <ul class="powerline" style="display: flex;">
          <li class="left">  
          <div style='display: none;'><a href="#" onclick="terminal()"> tse </a></div> 
          <div style='display: none;' class="endsection"></div> 
          <div><a href="#" onclick="tsconf()"> TSEdit</a></div>
          <div class="endsection"></div>
          </li>
          <div class="center">
          <a href="#">` + tseDocTitle + `</a>
          </div>
          <li class="right">
          <div class="endsection"></div>
          <div><a href="#" onclick='tseSave("` + tseDocTitle + `")'>save</a></div>
          <div class="endsection"></div>
          <div><a href="#" onclick='popupClose("tse: ` + document.getElementById('terminalinput').textContent.slice(4,Infinity) + `")'>exit</a></div></li></ul>
          `);
          
          document.getElementById(tseDocTitle + "input").textContent = localStorage.getItem(tseDocTitle);
          terminline('TSE was opened in a new window.');

          if (document.getElementById(document.getElementById('terminalinput').textContent.slice(4,Infinity) + 'input').textContent == '') {
            document.getElementById(document.getElementById('terminalinput').textContent.slice(4,Infinity) + 'input').innerHTML += '_'
          }
        }
      }


      function tseSave(title) {
        localStorage.setItem(title,document.getElementById(title + 'input').textContent);
      }
      
      commands["tse"] = "tseOpen()";