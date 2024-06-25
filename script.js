var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuicon.onclick = function(){
    sidebar.classList.toggle("smallsidebar");
    container.classList.toggle("large-container");
}