const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener("click", function(e){
    const id=this.getAttribute("href");
    if(id && id.length>1){
      const target=document.querySelector(id);
      if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}
    }
  });
});
