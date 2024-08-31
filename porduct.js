var menu=document.getElementById("menu")
var sidenav=document.getElementById("sidenav")
var closedd= document.getElementById("closed-1")

menu.addEventListener("click",function(){
    sidenav.style.right =0 
})

closedd.addEventListener("click",function(){
    sidenav.style.right ="-50%"
})



var product=document.getElementById("product_container")
var search=document.getElementById("search")
var items= product.querySelectorAll("div")
console.log(items)
search.addEventListener("keyup",function(){
    var textval=event.target.value.toUpperCase()
    for(c=0;c<items.length;c++){
        var product_name=items[c].querySelectorAll("h1").textContent
        if(items[c].textContent.toUpperCase().indexOf(textval)<0){
            items[c].style.display="none"

        }
        else{
            items[c].style.display="block"

        }
    }
    
})
