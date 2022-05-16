let btn = document.getElementById("close");
let awsBanner = document.getElementById("AWS");
btn.addEventListener("click", (e)=>{
awsBanner.style.display = "none";
e.stopPropagation();
});
awsBanner.addEventListener("click", ()=>location.href = "https://www.amazon.com/");