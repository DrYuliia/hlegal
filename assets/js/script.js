
$('.hamburger').click(function () {
    $(this).toggleClass('active_class');
    $(".navMenu").toggleClass('active_class');

})

$('.close').click(function () {
    $(".navMenu").toggleClass('active_class');
})


$('#popup-link').click(function () {
    $(this).toggleClass('open');
    $(".popup").toggleClass('open');

})

$('.send-btn.pop_close').click(function () {
    $(".popup").toggleClass('open');
})
$('.send-btn').click(function () {
    $(".popup").toggleClass('open');
})
$('.pop_close').click(function () {
    $(".popup").toggleClass('open');
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


$('#slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1


        },
        600: {
            items: 1

        },
        1000: {
            items: 1

        }
    }
})

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    this.classList.add("btn_active");
    btn.textContent = 'Send';
    $("form")[0].reset();

});
