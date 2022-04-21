function nmCreate() {
    document.body.innerHTML += `<div id='nmDiv'><input type="text" id="myInput" onkeyup="nmSearch()" placeholder="Search for names.." title="Type in a name"><ul onclick='popupClose("nmDiv");' id="myUL">` + localStorage.getItem('nmConfig') + `</ul></div>`;
  }
  
  function nmSearch() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
  
  // Terminal Keybind
  document.addEventListener("keyup", function(event) {
      if (event.keyCode === 192) {
          nmCreate();
      }
  });
  
  if (localStorage.getItem('nmConfig') == null) {
    localStorage.setItem('nmConfig','<li><a href="#" onclick="terminal();">terminal</a></li>');
  }
  
  
  // Create new link Element
  var link = document.createElement('link'); 
  
  // set the attributes for link element
  link.rel = 'stylesheet'; 
  
  link.type = 'text/css';
  
  link.href = 'https://brodyking.github.io/netbox-packages/netmanager/source.css'; 
  
  // Get HTML head element to append 
  // link element to it 
  document.getElementsByTagName('HEAD')[0].appendChild(link); 
