document.addEventListener("DOMContentLoaded", loadButton);

function loadButton(){
  var tag = document.createElement("button");
  var text = document.createTextNode("Footer ein-/ausblenden");
  tag.addEventListener("click", toggleFooter);
  tag.appendChild(text);

  tag.style.position = "fixed";
  tag.style.left = "130px";
  tag.style.bottom = "10px";
  tag.style.zIndex = "1000";

  document.body.appendChild(tag);
}

function toggleFooter() {
    const footer = document.getElementById('footer');
    if (footer.style.display === 'none') {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  }
  