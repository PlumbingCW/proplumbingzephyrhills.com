(function(){
var d=document,b=d.body,t=d.getElementById('menuToggle');
function setOpen(o){b.classList.toggle('menu-open',o);d.documentElement.style.overflow=o?'hidden':'';if(t){t.setAttribute('aria-expanded',o?'true':'false');}}
if(t){t.addEventListener('click',function(){setOpen(!b.classList.contains('menu-open'));});}
d.querySelectorAll('[data-close]').forEach(function(el){el.addEventListener('click',function(){setOpen(false);});});
d.querySelectorAll('.mob-links a').forEach(function(a){a.addEventListener('click',function(){setOpen(false);});});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);}});
window.addEventListener('resize',function(){if(window.innerWidth>768){setOpen(false);}});
})();