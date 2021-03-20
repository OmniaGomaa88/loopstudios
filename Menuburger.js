let closeImage =document.querySelector("#close")
let BurgerImage= document.querySelector("#Menuburger")
let hiddenNav = document.querySelector("header #menuMobiel ");
let hiddenNavlinks = document.querySelector("header #menuMobiel ul");

function showMenu() {
    hiddenNav.style.display="block";
    hiddenNav.classList.add("slidein")
    BurgerImage.style.display="none"
    closeImage.style.display="block"
    hiddenNavlinks.style.display="block"
};
function hideMenu () {
    hiddenNav.classList.remove("slidein");
    BurgerImage.style.display="block"
    closeImage.style.display="none"
    hiddenNavlinks.style.display="none"
    hiddenNavlinks.style.display="none"
};
window.addEventListener('resize',function(){
    console.log(window.innerWidth)
    if(window.innerWidth>600){
        hiddenNav.style.display="none"
    }else{
        hiddenNav.style.display="block"
    }
})


BurgerImage.addEventListener("click",showMenu)
closeImage.addEventListener("click",hideMenu)
