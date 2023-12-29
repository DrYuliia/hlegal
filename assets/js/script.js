
$('.hamburger').click(function () {
    $(this).toggleClass('active');
    $(".navMenu").toggleClass('active');

})

$('.close').click(function () {
    $(".navMenu").toggleClass('active');
})


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");



function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";

    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";

    }

}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    this.classList.add("btn_active");
    btn.textContent = 'Send';
    $("form")[0].reset();

});

