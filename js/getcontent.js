var xhttpHeader = new XMLHttpRequest();
xhttpHeader.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
    }
};
xhttpHeader.open("GET", "header.html", true);
xhttpHeader.send();


var xhttpFooter = new XMLHttpRequest();
xhttpFooter.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
    }
};
xhttpFooter.open("GET", "footer.html", true);
xhttpFooter.send();
