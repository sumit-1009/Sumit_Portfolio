let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
  
let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".offcanvas-end.offcanvas");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })

let navCollapse = document.querySelector(".offcanvas-end.offcanvas");
navBar.forEach(function(a) {
  a.addEventListener("click", function() {
    navCollapse.style.visibility = "hidden";
    navCollapse.classList.remove("show");
  });
});
