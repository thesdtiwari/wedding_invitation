var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}


document.getElementById("navbar").addEventListener("click", function(){
    //prompt("sfgvsg");
   var check = document.querySelectorAll("#nav-link").classList.add("btn-primary");
   if(check){
    prompt("sfgvsg");
   }else{
    prompt("llll");
   }

});