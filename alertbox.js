function rmw(id) {
  w = document.querySelector(".abox_id_" + id);
  w.innerHTML = w.outerHTML = '';
}

function WindowsAlert(m = "Hello, World", t = "Message") {
  let id = Math.random().toString(36).split(".")[1];
  let abox = document.createElement("div");
  abox.classList.add("abox");
  abox.classList.add("abox_id_" + id);
  
  let header = document.createElement("div");
  header.classList.add("abox_header");
  let path = document.createElement("span");
  path.classList.add("path");
  path.innerHTML = t;
  let _x = document.createElement("span");
  _x.classList.add("abox_close");
  _x.innerText = String.fromCodePoint(0x2573);
  header.appendChild(path);
  header.innerHTML += " ";
  header.appendChild(_x);
  

  let inner = document.createElement("iframe");
  inner.classList.add("abox_inner")
  
  
  let footer = document.createElement("div");
  footer.classList.add("abox_footer");
  let button = document.createElement("button");
  button.innerText = "Ok";
  
  _x.onclick = _ => rmw(id);
  button.onclick = _x.onclick;
  
  abox.appendChild(header);
  abox.appendChild(inner)
  document.body.appendChild(abox);
  if(dragElement)[...document.querySelectorAll(".abox")].map(dragElement);
  inner.contentWindow.document.open();
  inner.contentWindow.document.write(m);
  inner.contentWindow.document.close();
  let style = document.createElement("link"); style.rel = "stylesheet"; style.href = "main.css"; inner.contentWindow.document.head.appendChild(style);
  return id
}

// stolen from w3school
function dragElement(elmnt) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt.children) {
    elmnt.children[0].onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


