const e=document.getElementById("icon"),t=document.getElementById("a"),s=document.getElementById("b"),c=document.getElementById("c");e.addEventListener("click",(()=>{t.classList.toggle("a"),s.classList.toggle("c"),c.classList.toggle("b")}));const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".header");o.addEventListener("click",(()=>{n.classList.toggle("is-open");l.classList.toggle("header--border")})),window.matchMedia("(min-width: 1024px)").addEventListener("change",(e=>{e.matches&&(n.classList.remove("is-open"),t.classList.toggle("a"),s.classList.toggle("c"),c.classList.toggle("b"))}));
//# sourceMappingURL=index.d0066cde.js.map