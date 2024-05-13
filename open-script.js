// ============MENU-OPEN-CLOSE-FUNCTION==========
function openMenu() {
    var element = document.getElementById("mobile-menu");
  element.classList.add("is-open");
}
function closeMenu() {
    var element = document.getElementById("mobile-menu");
    element.classList.remove("is-open");
}
// ==============BACKDROP-OPEN-CLOSE-BTN===========
function openBackdrop() {
    var element = document.getElementById("backdrop");
    element.classList.add("is-open");
}
function closeBackdrop() {
    var element = document.getElementById("backdrop");
    element.classList.remove("is-open");
}