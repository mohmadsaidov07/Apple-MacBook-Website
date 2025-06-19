const search_btn = document.getElementById("search_btn");
const bag_btn = document.getElementById("bag_btn");
const menu_btn = document.getElementById("menu_btn");

function windowPopUp() {
  const header__nav = document.querySelector(".header__nav");
  const header__add = document.querySelector(".mac-add");
  header__add.classList.add("mac-add-pop");
  header__nav.classList.toggle("header-pop");
}
