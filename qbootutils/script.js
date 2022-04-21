
commands["qboot"] = "termblock('<termhead><u style=" + '"' + "float: left" + '"' + "onclick=" + '"' + "termreturn()" + '"' + ">return</u>qboot command list</termhead><ul style=" + '"' + "list-style: none;margin: 0px;" + '"' + "><li>qboot-s <highlight>Select a different OS (kimmu,exos,megaos)</highlight></li><li>qboot-r <highlight>Reset the localStorage</highlight></li><li>qboot-vm <highlight>Run other OSes inside of netbox (kimmu,exos,megaos)</highlight></li></ul>');"

commands["qboot-s"] = "localStorage.setItem('qbootSelectedOS',document.getElementById('terminalinput').textContent.slice(8,Infinity));terminline('Default OS set to ' + document.getElementById('terminalinput').textContent.slice(8,Infinity))";

commands["qboot-r"] = "localStorage.clear();";

commands["qboot-vm"] = `popupCreate("qboot virt","<iframe style='width: 100%; height: 96%; border: 0px solid black;' src='https://brodyking.github.io/qboot/vms/" + document.getElementById('terminalinput').textContent.slice(9,Infinity) + ".html'>");document.getElementById('qboot virt').style.width = "800px";document.getElementById('qboot virt').style.height = "500px";document.getElementById('qboot virtpopupbody').style.maxHeight = "500px";`;
