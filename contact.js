var menu=document.getElementById("menu")
var sidenav=document.getElementById("sidenav")
var closedd= document.getElementById("closed-1")

menu.addEventListener("click",function(){
    sidenav.style.right =0 
})

closedd.addEventListener("click",function(){
    sidenav.style.right ="-50%"
})