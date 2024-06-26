const listNav = document.getElementById("navLink");
const sectionPrice = document.getElementById("price");
const priceTag = document.getElementById("priceTag");
listNav.style.maxHeight = "0px";

function toggleNavbar() {
  if (listNav.style.maxHeight === "0px") {
    listNav.style.maxHeight = "400px";
  } else {
    listNav.style.maxHeight = "0px";
  }
}

//price zoom-in
window.addEventListener("scroll", function () {
  const pastPriceSection = sectionPrice.getBoundingClientRect().top;
  if (pastPriceSection <= 0) {
    priceTag.classList.add("price-zoom-in");
  } else {
    priceTag.classList.remove("price-zoom-in");
  }
});


//year
const thisYear = new Date().getFullYear();
document.getElementById("year").innerHTML = thisYear;