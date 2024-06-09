const listNav = document.getElementById("navLink");
listNav.style.maxHeight = "0px";


function toggleNavbar() {
  if ((listNav.style.maxHeight === "0px")) {
    listNav.style.maxHeight = "400px";
  } else {
    listNav.style.maxHeight = "0px";
  }
}
