function pm() {
  document.getElementById('pmdiv').innerHTML = `
  <termhead><u style="float: left" onclick="termreturn()">return</u>pm</termhead>
  <ul style="list-style: none;margin: 0px;">
  <li>pmi [package name] <highlight>install packages</highlight></li>
  </ul>`;
}

commands["pm"] = `termblock('<div id="pmdiv"></div>'); pm();`;

function pmInstall() {
  var appsBeingInstalled = "https://brodyking.github.io/netbox-packages/" + document.getElementById('terminalinput').textContent.slice(4,Infinity) + "/install.js";
  fetch(appsBeingInstalled)
  .then(response => response.text())
  .then((data) => {
    termblock("You installed the following: <br> <span style='color: white;background-color: black;' id='appsSourceCodeRaw'></span><br><span style='color: green'> if you see this, the package has installed correctly</span>");
    document.getElementById('appsSourceCodeRaw').innerHTML = data;
    localStorage.setItem(appsBeingInstalled,data);
    if (localStorage.getItem("autorun") == null) {
      localStorage.setItem("autorun","/* WELCOME TO AUTORUN. This file lets you run javascript at boot. This is also where programs are installed */                  " + document.getElementById('appsSourceCodeRaw').textContent);
    } else {
      appsAutorunPrev = localStorage.getItem("autorun");
      localStorage.setItem("autorun",appsAutorunPrev + document.getElementById('appsSourceCodeRaw').textContent);
    }
    termreturn();
    terminline(`====================================<br>
                Your <highlight>package</highlight> is finished installing!<br>
                ====================================<br>`);
    eval(localStorage.getItem('autorun'));
  
})}

commands["pmi"] = "pmInstall()";

