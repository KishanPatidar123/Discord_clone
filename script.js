const buttons = document.getElementById("btnid");

window.addEventListener("scroll", function() {
  
  if (window.scrollY > 5) {
    buttons.classList.add("open");
  } else {
    buttons.classList.remove("open");
  }
});


const select = document.getElementById("selectid");
const menu = document.getElementById("not");
const social = document.getElementById("social-icon-div");
const icons = document.getElementById("iconsdiv");

select.addEventListener("click", () => {
  if (menu.classList.contains("menuopen")) {
        menu.classList.remove("menuopen");
        social.classList.add("displayblock");
      } else {
        menu.classList.add("menuopen");
    const newLocal = "displaynone";
        social.classList.add(newLocal);
      }
});
