function papernb() {
    var changebgurl = document.getElementById("terminalinput").textContent.slice(7, Infinity);
    document.body.style.backgroundImage = "url('" + changebgurl + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    localStorage.setItem("papernb",changebgurl)
    terminline("Background changed to <aqua>" + changebgurl + "</aqua>.");}
commands["papernb"] = "papernb()";