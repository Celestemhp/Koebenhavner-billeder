export function dark_mode()
const root = document.querySelector("html");
const btn = document.querySelector("#toggle-btn");
// document.documentElement.classList.add("dark");
// document.documentElement.classList.remove("dark");
function toggleTheme() {
    root.classList.toggle("dark");
}
btn.addEventListener("click", toggleTheme);


// darkmode
function dark_mode() {
    var element = document.body;
    element.classList.toggle("dark");
 }