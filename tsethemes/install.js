// Create new link Element
var link = document.createElement('link'); 

// set the attributes for link element
link.rel = 'stylesheet'; 

link.type = 'text/css';

link.href = 'https://brodyking.github.io/netbox-packages/tsethemes/tsthemes.css'; 

// Get HTML head element to append 
// link element to it 
document.getElementsByTagName('HEAD')[0].appendChild(link); 
