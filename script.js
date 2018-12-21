Array.prototype.contains = function (item) { return this.indexOf(item) != -1; }

window.onload = function () {
  window.main = document.getElementsByTagName('main')[0];
  main.clear = function () {
    this.innerHTML = "";
  };
  main.addLine = function (text) {
    var pElem = document.createElement("p");
    pElem.innerHTML = text;
    main.appendChild(pElem);
  };
  main.pagetext = function (page) {
    var textinpage = pagetextdata[page];
    main.clear();
    for (var i = 0; i < textinpage.length; i++) {
      main.addLine(textinpage[i]);
    }
  };

  //Initial Page
  main.pagetext("start");
};

var pagetextreq = new XMLHttpRequest();
pagetextreq.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    window.pagetextdata = JSON.parse(this.responseText);
  }
};
pagetextreq.open("GET", "pagetext.json", true);
pagetextreq.send();
