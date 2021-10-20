mybutton = document.getElementById("topBtn");
window.onscroll = function() {
  scroll()
};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
